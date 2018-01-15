import * as React from "react";
import { Todo } from '../../libType/types';

interface TodoFormProps { 
            handleSubmit(event: any): void;
            handleInputChange(event: React.FormEvent<HTMLInputElement>): void;
            currentTodo: string;
        }
////
export const TodoForm = (props: TodoFormProps) => {
    <form onSubmit={props.handleSubmit}>
        <input 
            type="text" 
            onChange={props.handleInputChange} 
            value={props.currentTodo} 
        />
    </form>
}
