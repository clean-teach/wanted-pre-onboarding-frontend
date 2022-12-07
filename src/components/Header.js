import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  h1 {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .btn-login {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: none;
    background: none;
  }
`;

function Header({ isLogin, setIsLogin }) {
  const navigator = useNavigate();
  const onLogout = () => {
    localStorage.removeItem('loginToken');
    navigator('/wanted-pre-onboarding-frontend');
    setIsLogin(false);
  };
  return (
    <HeaderStyle>
      <h1>원티드 프리온보딩 사전과제 : 김청훈</h1>
      {isLogin ? <button onClick={onLogout}>Log Out</button> : null}
    </HeaderStyle>
  );
}

export default Header;
