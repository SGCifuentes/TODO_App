import {
  FETCH_TODO_FAILURE,
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
} from "./actionTypes";
import { TodoActions, TodoState } from "./types";

const initialState: TodoState = {
  pending: false,
  todos: [],
};

export default function reducer(state = initialState, action: TodoActions) {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        pending: false,
        todos: action.payload.todos,
        error: undefined,
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        pending: true,
        todos: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}
