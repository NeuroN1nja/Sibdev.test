import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
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
                <Route exact path='/' component={Home} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <PrivateRoute path='/settings' component={Settings} />
            </div>
        );
    }
}

export default App;