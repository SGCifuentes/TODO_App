import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchTodoRequest } from "./store/todo/actions";
import {
  getErrorSelector,
  getPendingSelector,
  getTodoSelector,
} from "./store/todo/selectors";

function App() {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const todos = useSelector(getTodoSelector);
  const error = useSelector(getErrorSelector);

  const handleFetchRequest = () => {
    dispatch(fetchTodoRequest());
  };

  return (
    <div style={{ padding: "15px" }}>
      {todos.length < 1 ? (
        <>
          <h3>Desea cargar los TODOS?</h3>
          <button onClick={() => handleFetchRequest()}>Obtener TODO's</button>
        </>
      ) : (
        <h3>TODO's</h3>
      )}
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        todos.map((todo, index) => (
          <div style={{ marginBottom: "10px" }} key={todo.id}>
            {`${++index}. ${todo.title}`}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
