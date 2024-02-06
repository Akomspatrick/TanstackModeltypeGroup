import {render,screen} from '@testing-library/react';


import {  expect, it } from 'vitest';
import Simple from './Simple';

it('renders learn react link', () => {
 
    render(<Simple />);
    //const linkElement = screen.getByText(/learn react/i);
    const message = screen.getByText(/Simple/i);
    expect(message).toBeInTheDocument();
});