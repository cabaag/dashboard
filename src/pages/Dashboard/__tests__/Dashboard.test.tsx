import { shallow } from 'enzyme';
import React from 'react';
import Dashboard from '../Dashboard';

describe('test Dashboard component', () => {

		test('should render component', () => {
				expect(shallow(<Dashboard />)).toMatchSnapshot();
		});

});
