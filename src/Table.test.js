import {fireEvent, render, screen} from '@testing-library/react';
import {Table} from "./Table";

describe('Table', () => {

    test('1', async () => {
        render(<Table/>);

        const button = screen.getByText(/Change data/i);
        fireEvent.click(button)
    });

    test('2', async () => {
        render(<Table/>);

        const button = screen.getByText(/Change data/i);
        fireEvent.click(button)
    });


})

