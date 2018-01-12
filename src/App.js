import React, { Component } from 'react';
import { TodoForm, TodoList } from './components/todo';
import { addTodo, generateId, findById, toggleTodo, updateTodo } from './lib/todoHelpers';
import { pipe, partial } from './lib/utils';

class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Learn JSX', isComplete: true},
      {id: 2, name: 'Build apps', isComplete: false},
      {id: 3, name: 'Ship it', isComplete: false},
    ],
    currentTodo: ''
  };

  handleToggle = (id) => {
    const updatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    //const todo = findById(id, this.state.todos);
    //const toggled = toggleTodo(todo);
    //const updatedTodos = updateTodo(this.state.todos, toggled);
    this.setState({todos: updatedTodos(id, this.state.todos)})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = { id: generateId(), name: this.state.currentTodo, isComplete: false }
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (event) => {
    event.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo state'
    })
  }
  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value
    });
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Todos</h2>  
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm 
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler}
          />}
        </div> 
        <TodoList handleToggle={this.handleToggle} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
