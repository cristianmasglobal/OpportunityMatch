import React from 'react';
import {render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import { Home } from '../Home'
import { FetchData} from '../FetchData'

test('Should render the page', ()=>{
    render(<Home />);
    const clientElement = screen.getByTestId('todo-1');
    expect(clientElement).toHaveTextContent('Hello, world!');

})

test('Should render the page', ()=>{
    render(<Home />);
    const clientElement = screen.getByTestId('todo-1');
    expect(clientElement).toBeInTheDocument();
})
