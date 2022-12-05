import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInContainer from './containers/SignInContainer';
import SignUpContainer from './containers/SignUpContainer';
import TodosContainer from './containers/TodosContainer';
import './styles/style.scss';

function App() {
  return (
    // <React.Fragment> https://reactjs-org-ko.netlify.app/docs/fragments.html
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SignInContainer />} />
        <Route path="/signup" element={<SignUpContainer />} />
        <Route path="/todos" element={<TodosContainer />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
