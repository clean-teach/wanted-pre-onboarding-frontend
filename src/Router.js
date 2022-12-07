import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import SignInContainer from './containers/SignInContainer';
import SignUpContainer from './containers/SignUpContainer';
import TodosContainer from './containers/TodosContainer';

const router = createBrowserRouter([
  {
    path: '/wanted-pre-onboarding-frontend',
    element: <App />,
    children: [
      {
        path: '',
        element: <SignInContainer />,
      },
      {
        path: 'signup',
        element: <SignUpContainer />,
      },
      {
        path: 'todos',
        element: <TodosContainer />,
      },
    ],
  },
]);

export default router;
