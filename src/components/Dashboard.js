import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { checkAuth } from './helpers'
import Home from './Home'

class Dashboard extends Component {
    state = {  }

    render() {
        return (
            <Route path="/dashboard" render={() => (
                checkAuth() ? (
                    <div>Dashboard</div>                  
                ) : (
                    <Redirect to="/" component={Home} />
                    )
            )} />
        );
    }
}

export default Dashboard;