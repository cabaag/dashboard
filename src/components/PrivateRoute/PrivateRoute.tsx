import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { GlobalContext } from '../../globalContext';
import { isTokenExpired } from '../../services/token.service';

export default function PrivateRoute({ component, ...rest }: any) {
	return (
		<GlobalContext.Consumer>
			{({ token }) => (
				<Route
					{
					...rest /*  */
					}
					render={(props) =>
						token && !isTokenExpired(token) ? (
							React.createElement(component, props)
						) : (
								<Redirect to='/login' />
							)
					}
				/>
			)}
		</GlobalContext.Consumer>
	);
}
