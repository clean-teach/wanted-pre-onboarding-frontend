import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import router from './router/Router';
import { GlobalStyle } from './styles/GlobalStyle';
import { whiteTheme } from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={whiteTheme}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>,
  // </React.StrictMode>
);
