/* eslint-disable no-restricted-globals */
import styled from 'styled-components';
import { Box } from '../../assets/styles/GlobalStyle';
import { ITodo } from '../../types/atomsTypes';
import { useRecoilState } from 'recoil';
import { atomTodos } from '../../atoms/atoms';
import { fetchDeleteTodo, fetchUpdateTodo } from '../../apis/todo';
import { error } from 'console';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ICreateTodoForm } from '../../types/todoComponentTypes';

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;

  & + & {
    margin-top: 1rem;
  }
  &.isClicked {
    font-weight: bold;
    transform: scale(1.04);
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.4);
    transition: 0.2s;
  }
  a {
    display: flex;
    align-items: center;
    &:hover {
      text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
    }
  }
`;
const ButtonArea = styled.div`
  padding: 0.5rem;
  background: none;
`;

interface IProps {
  access_token: string;
  todoData: ITodo;
}

function TodoItem({ access_token, todoData }: IProps) {
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
  const handleToggleModifyMode = () => {
    setModifyMode((current) => !current);
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
    <Wrapper as="li">
      <input type="checkbox" checked={isCompleted} onChange={handleCheck} />
      {isModifyMode ? (
        <form onSubmit={handleSubmit(handleModifyTodo)}>
          <input
            type="text"
            {...register('newTodoContent', {
              required: '할 일을 입력해 주세요.',
              maxLength: 20,
            })}
          />
          {watch().newTodoContent?.length > 20 && (
            <p className="warning">할 일은 20자 이내로 작성해 주세요</p>
          )}
          <ButtonArea>
            <button type="submit" data-testid="submit-button">
              제출
            </button>
            <button
              type="button"
              data-testid="cancel-button"
              onClick={handleToggleModifyMode}
            >
              취소
            </button>
          </ButtonArea>
        </form>
      ) : (
        <>
          {todo}
          <ButtonArea>
            <button
              type="button"
              data-testid="modify-button"
              onClick={handleToggleModifyMode}
            >
              수정
            </button>
            <button
              type="button"
              data-testid="delete-button"
              onClick={handleRemove}
            >
              삭제
            </button>
          </ButtonArea>
        </>
      )}
    </Wrapper>
  );
}

export default TodoItem;
