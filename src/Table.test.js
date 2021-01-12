import {fireEvent, render, screen} from '@testing-library/react';
import {Table} from "./Table";

describe('Table', () => {

    test('1', () => {
        render(<Table/>);

        fireEvent.click(screen.getByText(/Change data/i))
    });

    test('2', () => {
        render(<Table/>);

        fireEvent.click(screen.getByText(/Change data/i))
    });
})

