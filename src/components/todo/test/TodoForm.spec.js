import React from 'react';
import { shallow, mount, render, configure  } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { TodoForm } from '../';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const output = shallow(
    <TodoForm  
        currentTodo={{id: 1, name: 'Learn JSX', isComplete: true}}
    />
  );
  //handleInputChange={this.handleInputChange}
  //currentTodo={this.state.currentTodo}
  //handleSubmit={submitHandler}
describe('TodoForm', () => {
  it('should render correctly', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should the input element be rendered', () => {
    expect(output.containsAllMatchingElements([
        <input />
      ])).toEqual(true);
  });
});
