import { useRecoilValue } from 'recoil';
import { atomIsAccess } from '../atoms/atoms';
import TodoList from '../components/pages/todos/TodoList';
import SignIn from '../components/pages/auths/SignIn';

function ReturnComponentByAccess() {
  const isAccess = useRecoilValue(atomIsAccess);

  if (isAccess) {
    return <TodoList />;
  } else {
    return <SignIn />;
  }
}

export default ReturnComponentByAccess;
