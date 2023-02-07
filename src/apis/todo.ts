import axios from 'axios';
import { IPropsGetTodos, IPropsPostTodos } from '../types/apiTypes';
import { API_FETCH_BASE_URL } from '../utils/strings';

export const fetchCreateTodo = async ({
  access_token,
  todo,
}: IPropsPostTodos) => {
  return await axios.post(
    `${API_FETCH_BASE_URL}todos`,
    { todo },
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    },
  );
};

export const fetchGetTodos = async ({ access_token }: IPropsGetTodos) => {
  return await axios.get(`${API_FETCH_BASE_URL}todos`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};