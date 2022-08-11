import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import store from './redux/store';
import { Provider as ReduxProvider } from "react-redux";

const theme = createTheme();

it('Should renders app component correctly.', () => {

  const tree = renderer.create(
    <React.StrictMode>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ReduxProvider>
      </BrowserRouter>
    </React.StrictMode>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Landing on DND 5 home page', () => {
  const route: string = '/';

  render(
    <React.StrictMode>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={[route]}>
            <App />
          </MemoryRouter>
        </ThemeProvider>
      </ReduxProvider>
    </React.StrictMode>
  )
});

test('Landing on details page.', () => {
  const route: string = '/details';

  render(
    <React.StrictMode>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={[route]}>
            <App />
          </MemoryRouter>
        </ThemeProvider>
      </ReduxProvider>
    </React.StrictMode>
  )
})