import { shallow } from 'enzyme';
import React from 'react';
import Layout from '../Layout';

describe('test Layout component', () => {

		test('should render component', () => {
				expect(shallow(<Layout />)).toMatchSnapshot();
		});

});
