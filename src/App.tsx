import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import {
	BrowserRouter as Router,
	Switch
} from 'react-router-dom';
import './App.scss';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import theme from './config/theme';
import { GlobalContext } from './globalContext';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

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
