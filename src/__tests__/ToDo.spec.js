import React from 'react'
import ToDo from '../Todo'
import { create } from 'react-test-renderer'


describe("Todo component", () =>{
    test("Mathches the snapshot", () => {
        const todo = create(<ToDo />);
        expect(todo.toJSON()).toMatchSnapshot();
    })
})

