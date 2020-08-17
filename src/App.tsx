import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import {
	BrowserRouter as Router,
	Redirect, Route, Switch
} from 'react-router-dom';
import './App.scss';
import theme from './config/theme';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { isTokenExpired } from './services/token.service';
import { GlobalContext } from './globalContext';


function PrivateRoute({ component, ...rest }: any) {
	return (<GlobalContext.Consumer>
		{
			({ token }) => (
				<Route {...rest} render={(props) => (
					token && !isTokenExpired(token)
						? React.createElement(component, props)
						: <Redirect to='/login' />
				)} />
			)}
	</GlobalContext.Consumer>
	);
}


function PublicRoute({ component, ...rest }: any) {
	return (<GlobalContext.Consumer>
		{
			({ token }) => (
				<Route {...rest} render={(props) => (
					!token || isTokenExpired(token)
						? React.createElement(component, props)
						: <Redirect to='/' />
				)} />
			)
		}
	</GlobalContext.Consumer>
	);
}


const tokenTmp = localStorage.getItem('token') || null;

function App() {
	const [token, setToken] = React.useState<string | null>(tokenTmp);

	const handleSetToken = (t: string | null) => {
		setToken(t);
	};

	return (
		<GlobalContext.Provider value={{ token, setToken: handleSetToken }}>
			<ThemeProvider theme={theme}>
				<Router>
					<Switch>
						<PublicRoute exact path='/login' component={Login} />
						<PrivateRoute path='/' component={Home} />
					</Switch>
				</Router>
			</ThemeProvider>
		</GlobalContext.Provider>
	);
}

export default App;
