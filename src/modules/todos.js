import axios from 'axios';
import { errorAction, loadingAction, successAction } from './common';

const GET_TODOS = 'GET_TODOS';
const CREATE = 'CREATE';
const TOGGLE = 'TOGGLE';
const CHANGE = 'CHANGE';
const REMOVE = 'REMOVE';

const getTodos = (todos) => ({ type: GET_TODOS, todos });
const createTodo = (todo) => ({ type: CREATE, todo });
const toggleTodo = (id) => ({ type: TOGGLE, id });
const changeTodo = (todo) => ({ type: CHANGE, todo });
const removeTodo = (id) => ({ type: REMOVE, id });

export const getTodosAsync = (access_token) => async (dispatch) => {
  dispatch(loadingAction());
  try {
    const response = await axios.get(
      `https://pre-onboarding-selection-task.shop/todos`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    dispatch(successAction());
    // console.log('response : ', response.data);
    dispatch(getTodos(response.data));
  } catch (error) {
    dispatch(errorAction(error));
  }
};
export const createTodoAsync = (access_token, addInput) => async (dispatch) => {
  dispatch(loadingAction());
  try {
    const response = await axios.post(
      'https://pre-onboarding-selection-task.shop/todos',
      {
        todo: addInput,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    if (response) {
      dispatch(createTodo(response.data));
    }
  } catch (error) {
    dispatch(errorAction(error));
  }
};
export const toggleTodoAsync =
  (access_token, currentId, todo, isCompleted) => async (dispatch) => {
    dispatch(loadingAction());
    try {
      const response = await axios.put(
        `https://pre-onboarding-selection-task.shop/todos/${currentId}`,
        {
          todo,
          isCompleted: !isCompleted,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (response) {
        dispatch(toggleTodo(response.data.id));
      }
    } catch (error) {
      dispatch(errorAction(error));
    }
  };
export const changeTodoAsync =
  (access_token, currentId, editInput, isCompleted, callback) =>
  async (dispatch) => {
    dispatch(loadingAction());
    try {
      const response = await axios.put(
        `https://pre-onboarding-selection-task.shop/todos/${currentId}`,
        {
          todo: editInput,
          isCompleted: isCompleted,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (response) {
        console.log('API 응답 : ', response.data);
        dispatch(changeTodo(response.data));
        return callback(response.data);
      }
    } catch (error) {
      dispatch(errorAction(error));
    }
  };
export const removeTodoAsync =
  (access_token, currentId) => async (dispatch) => {
    dispatch(loadingAction());
    try {
      const response = await axios.delete(
        `https://pre-onboarding-selection-task.shop/todos/${currentId}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      if (response) {
        dispatch(removeTodo(currentId));
      }
    } catch (error) {
      dispatch(errorAction(error));
    }
  };

const initialState = {
  todos: null,
  // [
  //     {
  //         id: null,
  //         isCompleted: false,
  //         text: ''
  //     },
  // ],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        todos: action.todos,
      };
    case CREATE:
      return {
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? {
                ...todo,
                isCompleted: !todo.isCompleted,
              }
            : todo,
        ),
      };
    case CHANGE:
      console.log('Action Reducer : ', action.todo);
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.todo.id
            ? {
                ...todo,
                text: action.todo.todo,
              }
            : todo,
        ),
      };
    case REMOVE:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}
