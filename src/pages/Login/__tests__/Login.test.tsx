import { shallow, mount } from 'enzyme';
import React from 'react';
import Login from '../Login';

describe('test Login component', () => {

	test('should match snapshot', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper).toMatchSnapshot();
	});

	// test('should open alert', () => {
	// 	const setState = jest.fn();
	// 	console.log(wrapper.find('#submit').props())
	// 	wrapper.find('#submit').props().onClick();
	// 	expect(setState).toHaveBeenCalledWith(1);
	// });
});
