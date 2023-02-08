/* eslint-disable no-restricted-globals */
import styled from 'styled-components';
import { Box } from '../../assets/styles/GlobalStyle';
import { ITodo } from '../../types/atomsTypes';
import { useRecoilState } from 'recoil';
import { atomTodos } from '../../atoms/atoms';
import { fetchDeleteTodo, fetchUpdateTodo } from '../../apis/todo';
import { error } from 'console';

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

  const { id, todo, isCompleted } = todoData;
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
  const handleToggleModifyMode = () => {};

  return (
    <Wrapper as="li">
      <input type="checkbox" checked={isCompleted} onChange={handleCheck} />
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
    </Wrapper>
  );
}

export default TodoItem;
