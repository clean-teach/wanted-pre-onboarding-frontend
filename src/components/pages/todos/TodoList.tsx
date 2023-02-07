import { useEffect } from 'react';
import styled from 'styled-components';
import { fetchGetTodos } from '../../../apis/todo';
import { LOCALSTORAGE_KEY_LOGIN_TOKEN } from '../../../utils/strings';
import CreateTodo from '../../todos/CreateTodo';
import { useRecoilState } from 'recoil';
import { atomTodos } from '../../../atoms/atoms';

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 4rem);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  h3 {
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;
const TodoArea = styled.div`
  width: 1024px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 20rem 1fr;
  gap: 2rem;
  & > *:nth-child(2) {
    grid-column: 2/3;
    grid-row: 1/3;
  }
  & > div > div {
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
    padding: 2rem;
    border-radius: 0.5rem;
  }
`;

function TodoListContainer() {
  const access_token = window.localStorage.getItem(
    LOCALSTORAGE_KEY_LOGIN_TOKEN,
  );
  const [todos, setTodos] = useRecoilState(atomTodos);

  useEffect(() => {
    if (access_token) {
      fetchGetTodos({ access_token })
        .then((response) => {
          console.log(response);
          setTodos(response.data);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  if (!access_token) {
    return <p>로그인이 필요합니다.</p>;
  }

  return (
    <Wrapper>
      <TodoArea>
        <CreateTodo access_token={access_token} />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.isCompleted} />
              {todo.todo}
            </li>
          ))}
        </ul>
      </TodoArea>
    </Wrapper>
  );
}

export default TodoListContainer;
