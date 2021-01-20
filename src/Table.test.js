import {fireEvent, render, screen} from '@testing-library/react';
import {Table} from "./Table";
import React from "react";

const controllablePromise = async () => {
    let handlesResolver;
    const handlesPromise = new Promise(resolve => {
        handlesResolver = resolve;
    });
    const promise = new Promise(
        (resolve, reject) => handlesResolver && handlesResolver({ resolve, reject })
    );

    const { resolve, reject } = await handlesPromise;

    return {
        promise,
        resolve,
        reject,
    };
}

const runTest = async () => {
    const {promise, resolve: resolveGridApi} = await controllablePromise();

    render(<Table onGridReady={resolveGridApi}/>);

    const api = await promise;
    expect(api.selectAll).toBeDefined()

    fireEvent.click(screen.getByText(/Change data/i))
}

describe('Table', () => {

    test('1', runTest);
    test('2', runTest);
    test('3', runTest);
    test('4', runTest);
    test('5', runTest);
    test('6', runTest);
})

