import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles/style.scss';

function App() {
  return (
    // <React.Fragment> https://reactjs-org-ko.netlify.app/docs/fragments.html
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}

export default App;
