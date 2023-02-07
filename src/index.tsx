import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import router from './router/Router';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { whiteTheme } from './assets/styles/theme';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <ThemeProvider theme={whiteTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </RecoilRoot>,
  // </React.StrictMode>
);
