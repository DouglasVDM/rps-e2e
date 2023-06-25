import { render, screen } from "@testing-library/react";

import Outcome from './Outcome';

describe('App component', () => {
    it("displayes 'Right wins!' when right wins", () => {
        const { getByTestId } = render(<Outcome result='right' />);
        expect(screen.getByTestId('outcome')).toHaveTextContent('Right wins!');
    });
});