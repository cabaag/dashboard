import axios from 'axios';
import { api } from '../config/config';

export function login(email: string, password: string): Promise<any> {
	return axios.post(api + '/auth/login', {
		email, password
	});
}
