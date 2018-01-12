import React from 'react';
import Calculator from './Calculator';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it("Should it render", () => {
    const component = shallow(<Calculator />);
    expect(component).toBeDefined();
})

it("Should it have twelve buttons", () => {
    const component = shallow(<Calculator />);
    expect(component.find('.button').length).toEqual(12)
})