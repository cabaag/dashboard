import { isTokenExpired } from '../token.service';

describe('Token service', () => {
	test('returns false when isTokenExpired is called', () => {
		expect(
			isTokenExpired('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTJmMzcwMTlhMTA1Zjc1YTkwY2M4NTciLCJ1c2VyIjp7Il9pZCI6IjVhMmYzNzAxOWExMDVmNzVhOTBjYzg1NyIsIm5hbWUiOiJDaGFybHkgQmFycmFuY28iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImNyZWF0ZWRBdCI6IjIwMTctMTItMTJUMDE6NTQ6NTYuMDQxWiJ9LCJleHBpcmVzSW4iOjE1OTc2ODAxOTQsImlhdCI6MTU5NzY3NjU5NCwiZXhwIjozMTk1MzU2Nzg4fQ.neSnJUbx6TUGLtxj1hLnZDAVteGXuYcXH00jXTjrhAg')
		).toBeFalsy();
	});

	test('returns true when isTokenExpired is called', () => {
		expect(isTokenExpired('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTJmMzcwMTlhMTA1Zjc1YTkwY2M4NTciLCJ1c2VyIjp7Il9pZCI6IjVhMmYzNzAxOWExMDVmNzVhOTBjYzg1NyIsIm5hbWUiOiJDaGFybHkgQmFycmFuY28iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImNyZWF0ZWRBdCI6IjIwMTctMTItMTJUMDE6NTQ6NTYuMDQxWiJ9LCJleHBpcmVzSW4iOjE1NDc2ODAxOTQsImlhdCI6MTU0NzY0NjU5NCwiZXhwIjoxNTQ3NjQ2NTk0fQ.v0hfxL4UA6gF9xOdw3QXefWb05T8KPVSPxo0rZ8Z6OY')).toBeTruthy();
	});

	test('should throw error The inspected token doesn\'t appear to be a JWT.', () => {
		expect(() => {
			isTokenExpired('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTJmMzcwMTlhMTA1Zjc1YTkwY2M4NTciLCJ1c2VyIjp7Il9pZCI6IjVhMmYzNzAxOWExMDVmNzVhOTBjYzg1NyIsIm5hbWUiOiJDaGFybHkgQmFycmFuY28iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImNyZWF0ZWRBdCI6IjIwMTctMTItMTJUMDE6NTQ6NTYuMDQxWiJ9LCJleHBpcmVzSW4iOjE1OTc2ODAxOTQsImlhdCI6MTU5NzY3NjU5NCwiZXhwIjozMTk1MzU2Nzg4fQ');
		}).toThrow('The inspected token doesn\'t appear to be a JWT');
	});

	test('should throw error Illegal base64url string!', () => {
		expect(() =>
			isTokenExpired('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTJmMzcwMTlhMTA1Zjc1YTkwY2M4NTciLCJ1c2VyIjp7Il9pZCI6IjVhMmYzNzAxOWExMDVmNzVhOTBjYzg1NyIsIm5hbWUiOiJDaGFybHkgQmFycmFuY28iLCJlbWFpbCI6ImFkWluQGFkbWluLmNvbSIsImNyZWF0ZWRBdCI6IjIwMTctMTItMTJUMDE6NTQ6NTYuMDQxWiJ9LCJleHBpcmVzSW4iOjE1OTc2ODAxOTQsImlhdCI6MTU5NzY3NjU5NCwiZXhwIjozMTk1MzU2Nzg4fQ.neSnJUbx6TUGLtxj1hLnZDAVteGXuYcXH00jXTjrhAg')
		).toThrow('Illegal base64url string!');
	});


	test('should throw error URI malformed', () => {
		expect(() =>
			isTokenExpired('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTJmMzcwMTlhMTA1Zjc1YTkwY2M4NTciLCJ1c2VyIjp7Il9pZCI6IjVhMmYzNzAxOWExMDVmNzVhOTBjYzg1NyIsIm5hbWUiOiJDaGFybHkgQmFycmFuY28iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImNyZWF0ZWRBdCI6IjIwMTctMTItMTJUMDE6NTQ6NTYuMDQxWiJ9LCJleHBpcmVzSW4iOjE1OTc2ODAxOTQsImlhdCI6MTU5NzY3NjUchwIjozMTk1MzU2Nzg4fQ.neSnJUbx6TUGLtxj1hLnZDAVteGXuYcXH00jXTjrhAg')
		).toThrow('URI malformed');
	});

	test('return true when isToken', () => {
		expect(
			isTokenExpired('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTJmMzcwMTlhMTA1Zjc1YTkwY2M4NTciLCJ1c2VyIjp7Il9pZCI6IjVhMmYzNzAxOWExMDVmNzVhOTBjYzg1NyIsIm5hbWUiOiJDaGFybHkgQmFycmFuY28iLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImNyZWF0ZWRBdCI6IjIwMTctMTItMTJUMDE6NTQ6NTYuMDQxWiJ9LCJleHBpcmVzSW4iOjE1OTc2ODAxOTQsImlhdCI6MTU5NzY3NjU5NH0.C9n152dJazrpXrGoTjQQSQaPP_7RdKfaTzl65PeeShw')
		).toBeTruthy();
	});

	test('return true when token is null', () => {
		expect(
			isTokenExpired('')
		).toBeTruthy();
	});

});
