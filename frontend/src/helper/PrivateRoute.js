import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				document.cookie != null ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
				)
			}
		></Route>
	);
};

export default PrivateRoute;
