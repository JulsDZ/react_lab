import { Todo } from './types';

export const addTodo = (list: string[], item: string) => [...list, item];

export const generateId = () => Math.floor(Math.random()*100000);

export const findById = (id: number, list: Array<Todo>) => find(id, list);

const find = (id: number, list: Array<Todo>) : Todo => {
    for(let i: number = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return list[i];
        }
    }
}
/*
export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete });

export const updateTodo = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id);
    return [
        ...list.slice(0, updatedIndex),
        updated,
        ...list.slice(updatedIndex+1)
    ]
}*/