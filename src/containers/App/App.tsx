import * as React from "react";
import { addTodo, findById } from '../../libType/todoHelpers';
import { Todo } from '../../libType/types';

type Props = {
};

type State = {
        todos: Todo[],
        currentTodo: string
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
            currentTodo: ''
        }
    }

    render() {
        return (
            <div>{findById(1, this.state.todos).name}</div>
        )
    }
}

export default App;