import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import DndHomePage from './DndHome';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import store from '../redux/store';
import { Provider as ReduxProvider } from "react-redux";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


const theme = createTheme();

const homePageRender = (
    <React.StrictMode>
        <BrowserRouter>
            <ReduxProvider store={store}>
                <ThemeProvider theme={theme}>
                    <DndHomePage />
                </ThemeProvider>
            </ReduxProvider>
        </BrowserRouter>
    </React.StrictMode>
)

it('Should be renders dnd home page correctly.', () => {
    const tree = renderer.create(
        homePageRender
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Check whether the favorite button label is available or not.', () => {
    const { getAllByText } = render(
        homePageRender
    );
    expect(getAllByText('View Favorites')).toBeTruthy();
});

test('Check whether the button is available or not', () => {
    render(
        homePageRender
    );
    const button = screen.getByTestId('favorite-btn-element')
    userEvent.click(button);

    expect(screen.getAllByText("Favorite Spells")).toBeTruthy()
})