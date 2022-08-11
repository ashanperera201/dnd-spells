import React from 'react';
import renderer from 'react-test-renderer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import store from '../redux/store';
import { Provider as ReduxProvider } from "react-redux";
import SpellList from './SpellList';

const theme = createTheme();

const page = (
    <React.StrictMode>
        <BrowserRouter>
            <ReduxProvider store={store}>
                <ThemeProvider theme={theme}>
                    <SpellList />
                </ThemeProvider>
            </ReduxProvider>
        </BrowserRouter>
    </React.StrictMode>
);

it('Should be render spell list component properly.', () => {
    const tree = renderer.create(page).toJSON();
    expect(tree).toMatchSnapshot();
});
