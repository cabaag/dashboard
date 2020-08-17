import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('test App component', () => {
	test('should match snapshot', () => {
		expect(shallow(<App />)).toMatchSnapshot();
	});

});
