import React from 'react';
import App from './App';
import { shallow, mount, render, configure  } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const output = shallow(
  <App />
);

it('renders without crashing', () => {
  expect(shallowToJson(output)).toMatchSnapshot();
});
