import axios from 'axios';
import { IFetchAuthDate } from '../types/apiTypes';
import { API_FETCH_BASE_URL } from '../utils/strings';

export const fetchSignUp = async ({ email, password }: IFetchAuthDate) => {
  return await axios.post(
    `${API_FETCH_BASE_URL}auth/signup`,
    {
      email,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
export const fetchSignIn = async ({ email, password }: IFetchAuthDate) => {
  return await axios.post(
    `${API_FETCH_BASE_URL}auth/signin`,
    {
      email,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
