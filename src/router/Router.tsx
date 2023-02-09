import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import ReturnComponentByAccess from './ReturnComponentByAccess';
import SignInContainer from '../components/pages/auths/SignInContainer';
import SignUpContainer from '../components/pages/auths/SignUpContainer';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/signup',
          element: <SignUpContainer />,
        },
        {
          path: '/signin',
          element: <SignInContainer />,
        },
        {
          path: '/todo',
          element: <ReturnComponentByAccess />,
        },
      ],
    },
  ],
  {
    basename: '/wanted-pre-onboarding-frontend',
  },
);

export default router;
