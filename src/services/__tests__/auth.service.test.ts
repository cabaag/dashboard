import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { login } from '../auth.service';
import { api } from '../../config/config';

describe('Auth service', () => {
	test('returns data when login is called', done => {
		const mock = new MockAdapter(axios);
		const data = { response: true };

		mock.onPost(api + '/auth/login', { email: 'admin@admin.com', password: 'admin' })
			.reply(200, data);

		login('admin@admin.com', 'admin').then(({ data: response }: any) => {
			expect(response).toEqual(data);
			done();
		});
	});
});
