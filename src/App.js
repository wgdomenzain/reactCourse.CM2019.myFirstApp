import React from 'react';
import { Route, Redirect, withRouter, Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Switch from 'react-router-dom/es/Switch';
import Home from './screens/Home/Home';
import Users from './screens/Users/Users';

export default withRouter(
	class App extends React.PureComponent {
		render() {
			return (
				<div>
					<Link to="/usuarios">
						<button>Usuarios</button>
					</Link>
					<Switch>
						<RouteWithTitle exact title="Inicio" path="/inicio" component={Home} />
						<RouteWithTitle exact title="Usuarios" path="/usuarios" component={Users} />
						<Redirect to={'/inicio'} />
					</Switch>
				</div>
			);
		}
	}
);

export const RouteWithTitle = ({ title, render, component: Comp, ...props }) => (
	<Route {...props} render={(p) => <DocumentTitle title={title}>{render ? render(p) : <Comp {...p} />}</DocumentTitle>} />
);
