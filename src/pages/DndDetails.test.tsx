import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import DndDetails from './DndDetails';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, } from 'react-router-dom'
import store from '../redux/store';
import { Provider as ReduxProvider } from "react-redux";
import routeData from 'react-router';

const theme = createTheme();

const location = {
    pathname: "/details",
    search: '',
    hash: '',
    state: {
        index: "acid-arrow",
        name: "Acid Arrow",
        url: "/api/spells/acid-arrow",
    }
}

jest.mock('react-router', () => ({
    ...jest.requireActual("react-router") as {},
    useLocation: jest.fn().mockImplementation(() => {
        return location;
    })
}));

const detailPageRender = (
    <React.StrictMode>
        <BrowserRouter>
            <ReduxProvider store={store}>
                <ThemeProvider theme={theme}>
                    <DndDetails />
                </ThemeProvider>
            </ReduxProvider>
        </BrowserRouter>
    </React.StrictMode>
)

describe('DND details page', () => {
    const useLocation = jest.spyOn(routeData, 'useLocation');

    beforeEach(() => {
        useLocation.mockReturnValue(location as any);
    });

    it('Should be renders dnd detail page correctly.', () => {
        const tree = renderer.create(
            detailPageRender
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should be renders header.', () => {
        const { getAllByText } = render(detailPageRender);
        expect(getAllByText("Spell Detail")).toBeTruthy();
    })
});

