import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import SignUp from '../components/pages/auths/SignUp';
import SignIn from '../components/pages/auths/SignIn';
import CheckAccess from './CheckAccess';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/todo',
        element: <CheckAccess />,
      },
    ],
  },
]);

export default router;
