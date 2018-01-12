import { addTodo, findById, toggleTodo } from './todoHelpers';
import deepFreeze from 'deep-freeze';

test('addTodo should add todo to the list', () =>{
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
    ];

    const newTodo = { id: 3, name: 'three', isComplete: false }

    const expectedTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ];

    const result = addTodo(startTodos, newTodo);

    expect(result).toEqual(expectedTodos);
})

test('findById should return the expected item from an array', () => {
    const startTodos = [
        { id: 1, name: 'one', isComplete: false },
        { id: 2, name: 'two', isComplete: false },
        { id: 3, name: 'three', isComplete: false }
    ];

    const expected = { id: 2, name: 'two', isComplete: false } 
    const result = findById(2, startTodos);

    expect(result).toEqual(expected);
})

test('toggleTodo should return the item with isComplete changed', () => {
    const startTodos = { id: 2, name: 'two', isComplete: false };

    const expected = { id: 2, name: 'two', isComplete: true };
    const result = toggleTodo(startTodos);
    deepFreeze(startTodos);
    expect(result).toEqual(expected);
})