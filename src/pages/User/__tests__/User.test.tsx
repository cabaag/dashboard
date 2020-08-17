import { shallow } from 'enzyme';
import React from 'react';
import User from '../User';

describe('test User component', () => {

		test('should render component', () => {
				expect(shallow(<User />)).toMatchSnapshot();
		});

});
