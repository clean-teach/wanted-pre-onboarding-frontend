/* eslint-disable no-restricted-globals */
import { ITodo } from '../../types/atomsTypes';
import { useRecoilState } from 'recoil';
import { atomTodos } from '../../atoms/atoms';
import { fetchDeleteTodo, fetchUpdateTodo } from '../../apis/todo';
import { useForm } from 'react-hook-form';
import { ICreateTodoForm } from '../../types/todoComponentTypes';
import TodoItemPresentational from './TodoItemPresentational';
import { useState } from 'react';

interface IProps {
  access_token: string;
  todoData: ITodo;
}

function TodoItemContainer({ access_token, todoData }: IProps) {
  const [todos, setTodos] = useRecoilState(atomTodos);
  const [isModifyMode, setModifyMode] = useState(false);

  const { id, todo, isCompleted } = todoData;

  const { register, watch, handleSubmit } = useForm<ICreateTodoForm>({
    defaultValues: {
      newTodoContent: todos.find((todo) => todo.id === id)?.todo,
    },
  });

  const handleCheck = () => {
    fetchUpdateTodo({ access_token, id, todo, isCompleted: !isCompleted })
      .then((response) => {
        setTodos((oldTodos) => {
          return oldTodos.map((todo) =>
            todo.id === id
              ? { ...todo, isCompleted: response.data.isCompleted }
              : todo,
          );
        });
      })
      .catch((error) => console.error(error));
  };
  const handleRemove = () => {
    if (confirm('정말 삭제 하시겠습니까?')) {
      fetchDeleteTodo({ access_token, id })
        .then((response) => {
          if (response.status === 204) {
            setTodos((oldTodos) => {
              return oldTodos.filter((todo) => todo.id !== id);
            });
          }
        })
        .catch((error) => console.error(error));
    }
  };

  const handleModifyTodo = ({ newTodoContent }: ICreateTodoForm) => {
    fetchUpdateTodo({ access_token, id, todo: newTodoContent, isCompleted })
      .then((response) => {
        setTodos((oldTodos) => {
          return oldTodos.map((todo) =>
            todo.id === id ? { ...todo, todo: response.data.todo } : todo,
          );
        });
        setModifyMode((current) => !current);
      })
      .catch((error) => console.error(error));
  };

  return (
    <TodoItemPresentational
      register={register}
      watch={watch}
      handleSubmit={handleSubmit}
      handleModifyTodo={handleModifyTodo}
      handleCheck={handleCheck}
      handleRemove={handleRemove}
      isModifyMode={isModifyMode}
      setModifyMode={setModifyMode}
      isCompleted={isCompleted}
      todo={todo}
    />
  );
}

export default TodoItemContainer;
