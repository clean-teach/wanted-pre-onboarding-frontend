import { useEffect } from 'react';
// import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
// import { isLoggedInState } from '../../atoms/atoms';
import { LOCALSTORAGE_KEY_LOGIN_TOKEN } from '../../utils/strings';

function CheckLoged() {
  // const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const navigate = useNavigate();

  // useEffect(() => {
  //   window.localStorage.getItem(LOCALSTORAGE_KEY_LOGIN_TOKEN)
  //     ? setIsLoggedIn(true)
  //     : setIsLoggedIn(false);
  // }, []);
  useEffect(() => {
    window.localStorage.getItem(LOCALSTORAGE_KEY_LOGIN_TOKEN)
      ? navigate('/todo')
      : navigate('/signin');
  }, []);
}

export default CheckLoged;
