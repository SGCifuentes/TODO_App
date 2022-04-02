import { FETCH_TODO_REQUEST } from "./actionTypes";
import { TodoActions, TodoState } from "./types";

const initialState: TodoState = {
  pending: false,
  todos: [],
};

export const reducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        pending: false,
      };
  }
};
