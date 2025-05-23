import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import StyledGlobal from './styledGlobal';
import { ThemeProvider } from 'styled-components';
import { theme } from './common/utils/theme';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import { Provider } from 'react-redux';
import store from './store';


const router = createHashRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledGlobal />
        {/* <App /> */}
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
