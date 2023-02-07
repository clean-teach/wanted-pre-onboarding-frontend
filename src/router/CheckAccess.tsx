import { useEffect } from 'react';
import { LOCALSTORAGE_KEY_LOGIN_TOKEN } from '../utils/strings';
import { useRecoilState } from 'recoil';
import { atomIsAccess } from '../atoms/atoms';
import TodoList from '../components/pages/todos/TodoList';
import { useNavigate } from 'react-router-dom';

function CheckAccess() {
  const [isAccess, setIsAccess] = useRecoilState(atomIsAccess);
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.getItem(LOCALSTORAGE_KEY_LOGIN_TOKEN)
      ? setIsAccess(true)
      : setIsAccess(false);
    !isAccess && navigate('/signin');
  }, []);

  if (isAccess) {
    return <TodoList />;
  } else {
    return <p>로그인이 필요합니다.</p>;
  }
}

export default CheckAccess;
