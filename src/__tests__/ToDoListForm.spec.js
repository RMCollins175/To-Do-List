import React from 'react'
import ToDoListForm from '../ToDoListForm'
import { create } from 'react-test-renderer'



describe('ToDoListForm component', () => {
    const component = create(<ToDoListForm />);
    const instance = component.getInstance();
    expect(instance.state.toDoItem).toBe("")
})

