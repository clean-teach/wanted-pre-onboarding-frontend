import CheckAccess from '../hooks/auth/CheckAccess';
import HeaderContainer from './layouts/HeaderContainer';

function App() {
  return (
    <>
      <HeaderContainer />
      <CheckAccess />
    </>
  );
}

export default App;
