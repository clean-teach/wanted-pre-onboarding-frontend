import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
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

function Header() {
  return <HeaderStyle></HeaderStyle>;
}

export default Header;
