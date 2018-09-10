import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import NavBar from './NavBar'
import PrivateRoute from './PrivateRoute'
import Settings from './Settings'
import ApiView from './ApiView/ApiView'


class App extends Component {
    state = {  }
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    <PrivateRoute path='/settings' component={Settings} />
                    <PrivateRoute path='/api/:id' component={ApiView} />
                    <Redirect to='/' />
                </Switch>
            </div>
        );
    }
}

export default App;