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
  flex-wrap: wrap;
  gap: 1rem;
  & + & {
    margin-top: 1rem;
  }
  .text {
    display: flex;
    align-items: center;
    flex: 1;
  }
  form {
    display: flex;
    flex: 1;
    input[type='text'],
    input[type='password'],
    input[type='email'],
    textarea {
      width: auto;
      flex: 1;
    }
  }
`;
const ButtonArea = styled.div`
  padding: 0.5rem;
  background: none;
  display: inline-block;
  button {
    padding: 0.25rem 0.5rem;
    & + button {
      margin-left: 0.5rem;
    }
  }
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
              className="secondary"
            >
              취소
            </button>
          </ButtonArea>
        </form>
      ) : (
        <>
          <div className="text">{todo}</div>
          <ButtonArea>
            <button
              type="button"
              data-testid="modify-button"
              onClick={handleToggleModifyMode}
              className="secondary"
            >
              수정
            </button>
            <button
              type="button"
              data-testid="delete-button"
              onClick={handleRemove}
              className="delete"
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
