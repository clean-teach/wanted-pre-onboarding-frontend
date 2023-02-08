import { useEffect } from 'react';
import styled from 'styled-components';
import { fetchGetTodos } from '../../../apis/todo';
import { LOCALSTORAGE_KEY_LOGIN_TOKEN } from '../../../utils/strings';
import CreateTodo from '../../todos/CreateTodo';
import { useRecoilState } from 'recoil';
import { atomTodos } from '../../../atoms/atoms';
import TodoItem from '../../todos/TodoItem';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
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
  width: 760px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
          setTodos(response.data);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  if (access_token) {
    return (
      <Wrapper>
        <TodoArea>
          <CreateTodo access_token={access_token} />
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                access_token={access_token}
                todoData={todo}
              />
            ))}
          </ul>
        </TodoArea>
      </Wrapper>
    );
  }

  return <p>로그인이 필요합니다.</p>;
}

export default TodoListContainer;
