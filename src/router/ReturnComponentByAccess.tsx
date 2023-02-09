import { useRecoilValue } from 'recoil';
import { atomIsAccess } from '../atoms/atoms';
import SignInContainer from '../components/pages/auths/SignInContainer';
import TodoListContainer from '../components/pages/todos/TodoListContainer';

function ReturnComponentByAccess() {
  const isAccess = useRecoilValue(atomIsAccess);

  if (isAccess) {
    return <TodoListContainer />;
  } else {
    return <SignInContainer />;
  }
}

export default ReturnComponentByAccess;
