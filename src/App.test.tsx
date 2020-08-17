import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('test App component', () => {
	const wrapper = shallow(<App />);

	test('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

});
