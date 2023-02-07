import { useEffect } from 'react';
import { LOCALSTORAGE_KEY_LOGIN_TOKEN } from '../../utils/strings';
import { useRecoilState } from 'recoil';
import { atomIsAccess } from '../../atoms/atoms';
import { Outlet, useNavigate } from 'react-router-dom';

function CheckAccess() {
  const [isAccess, setIsAccess] = useRecoilState(atomIsAccess);

  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.getItem(LOCALSTORAGE_KEY_LOGIN_TOKEN)
      ? setIsAccess(true)
      : setIsAccess(false);
  }, []);

  useEffect(() => {
    isAccess ? navigate('/todo') : navigate('/signin');
  }, [isAccess]);

  return <Outlet />;
}

export default CheckAccess;
