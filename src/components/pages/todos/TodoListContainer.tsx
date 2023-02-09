import { useEffect } from 'react';
import { fetchGetTodos } from '../../../apis/todo';
import { LOCALSTORAGE_KEY_LOGIN_TOKEN } from '../../../utils/strings';
import { useRecoilState } from 'recoil';
import { atomTodos } from '../../../atoms/atoms';
import TodoListPresentational from './TodoListPresentational';

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
    return <TodoListPresentational access_token={access_token} todos={todos} />;
  }

  return <p>로그인이 필요합니다.</p>;
}

export default TodoListContainer;
