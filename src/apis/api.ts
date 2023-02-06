import axios from 'axios';
import { IFetchAuthDate } from '../types/apiTypes';

const BASE_URL = 'https://pre-onboarding-selection-task.shop/';

export const fetchSignUp = async ({ email, password }: IFetchAuthDate) => {
  return await axios.post(
    `${BASE_URL}auth/signup`,
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
