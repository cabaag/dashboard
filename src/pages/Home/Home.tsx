import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Dashboard from '../Dashboard/Dashboard';
import User from '../User/User';

function Home() {
	return (
		<Layout>
			<Switch>
				<Route exact path='/'>
					<Dashboard />
				</Route>
				<Route exact path='/user'>
					<User />
				</Route>
			</Switch>
		</Layout>
	);
}

export default Home;
