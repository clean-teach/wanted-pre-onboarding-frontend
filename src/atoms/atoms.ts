import { atom } from 'recoil';
import { ITodo } from '../types/atomsTypes';

export const atomIsAccess = atom({
  key: 'isAccess',
  default: false,
});

export const atomTodos = atom<ITodo[]>({
  key: 'todos',
  default: [],
});
