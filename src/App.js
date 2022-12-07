import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Header from './components/Header';

const defaultheme = {
  pointColor: '#228be6',
};

const GlobalStyle = createGlobalStyle`
  button {
    cursor: pointer;
  }

  .sign-form {
    max-width: 480px;
    margin: 0 auto;
    label {
      display: none;
    }
    input,
    button {
      width: 100%;
      padding: 1rem;
      box-sizing: border-box;
      font-size: 1rem;
    }
    input {
      & ~ input {
        margin-top: 1rem;
      }
    }
    .error {
      color: #aa0000;
      margin-top: 1rem;
    }
    .success {
      color: ${(props) => props.theme.pointColor};
      margin-top: 1rem;
    }
    hr {
      margin: 2rem 0;
    }
    p {
      font-size: 0.875rem;
      color: #777777;
      a {
        color: #333333;
      }
    }
  }
  .round-box {
    width: 100%;
    min-width: 320px;
    box-sizing: border-box;
    margin: auto;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    & + .round-box {
      margin-top: 2rem;
    }
    ul {
      padding: 0;
    }
  }
  .primary-btn {
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
    font-size: 1.125rem;
    border: none;
    border-radius: 0.5rem;
    margin-top: 1rem;
    background-color: ${(props) => props.theme.pointColor};
    color: #ffffff;
    &:disabled {
      background-color: #cccccc;
      color: #666666;
      cursor: default;
    }
  }
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 920px;
  box-sizing: border-box;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    font-weight: bold;
    font-size: 2.5rem;
    padding: 2rem 0;
    color: ${(props) => props.theme.pointColor};
    text-align: center;
  }
`;

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('loginToken')) {
      setIsLogin(true);
    }
  }, []);

  return (
    // <React.Fragment> https://reactjs-org-ko.netlify.app/docs/fragments.html
    <React.Fragment>
      <Reset />
      <ThemeProvider theme={defaultheme}>
        <GlobalStyle />
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
        <Layout>
          <Outlet context={{ setIsLogin: setIsLogin, isLogin: isLogin }} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
