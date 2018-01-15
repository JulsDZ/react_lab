import * as React from "react";
import { addTodo, findById, generateId } from '../../libType/todoHelpers';
import { Todo } from '../../libType/types';
import { TodoForm } from '../../components/todoType/'

type Props = {
};

type State = {
        todos: Todo[],
        currentTodo: string,
        errorMessage: string
    };

class App extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            todos: [
                {id: 1, name: 'Learn JSX', isComplete: true},
                {id: 2, name: 'Build apps', isComplete: false},
                {id: 3, name: 'Ship it', isComplete: false}
            ],
            currentTodo: '',
            errorMessage: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleEmptySubmit = (event: any): void => {
        event.preventDefault();
        this.setState({
          errorMessage: 'Please supply a todo state'
        })
      }
      handleInputChange(e: React.FormEvent<HTMLInputElement>): void {
        this.setState({
          currentTodo: e.currentTarget.value
        });
      }
      handleSubmit = (event: any): void => {
        event.preventDefault();
        const newTodo = { id: generateId(), name: this.state.currentTodo, isComplete: false }
        const updatedTodos = addTodo(this.state.todos, newTodo);
        this.setState({
          todos: updatedTodos,
          currentTodo: '',
          errorMessage: ''
        })
      }
    render() {
        const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;

        return (
            <div>
                <TodoForm 
                    handleSubmit={this.handleSubmit}
                    handleInputChange={this.handleInputChange}
                    currentTodo={this.state.currentTodo}
                />
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        onChange={this.handleInputChange} 
                        value={this.state.currentTodo} 
                    />
                </form>
            </div>
        )
    }
}

export default App;