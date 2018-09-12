import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { checkAuth } from './helpers'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            checkAuth() ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
)

export default PrivateRoute