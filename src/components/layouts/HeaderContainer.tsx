// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOCALSTORAGE_KEY_LOGIN_TOKEN } from '../../utils/strings';
import { useRecoilState } from 'recoil';
import { atomIsAccess } from '../../atoms/atoms';
import HeaderPresentational from './HeaderPresentational';

function HeaderContainer() {
  const [isAccess, setIsAccess] = useRecoilState(atomIsAccess);
  const navigate = useNavigate();
  const onLogOut = () => {
    window.localStorage.removeItem(LOCALSTORAGE_KEY_LOGIN_TOKEN);
    setIsAccess(false);
    navigate('/signin');
  };

  return <HeaderPresentational isAccess={isAccess} onLogOut={onLogOut} />;
}

export default HeaderContainer;
