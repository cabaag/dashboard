import { shallow } from 'enzyme';
import React from 'react';
import Login from '../Login';

describe('test Login component', () => {

		test('should render component', () => {
				expect(shallow(<Login />)).toMatchSnapshot();
		});

});
