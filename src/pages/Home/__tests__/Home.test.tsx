import { shallow } from 'enzyme';
import React from 'react';
import Home from '../Home';

describe('test Home component', () => {

		test('should render component', () => {
				expect(shallow(<Home />)).toMatchSnapshot();
		});

});
