import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Header from './Header';

it('Should be render header component properly.', () => {
    const tree = renderer.create(
        <Header />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Should contain the header', () => {
    const { getAllByText } = render(<Header />);
    expect(getAllByText("DND 5 Spells")).toBeTruthy();
})





