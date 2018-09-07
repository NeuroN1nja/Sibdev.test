import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import NavBar from './NavBar'
import PrivateRoute from './PrivateRoute'
import Settings from './Settings'

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
                </Switch>
            </div>
        );
    }
}

export default App;