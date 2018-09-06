import React, { Component } from 'react'

class Dashboard extends Component {
    state = {  }
    
    checkAuth = () => {
        const token = localStorage.getItem('TestAppAuthToken')
        if (!token) {
            return false;
        }
        return true
    }

    render() {
        return (
            <Route exact path="/" render={() => (
                this.checkAuth() ? (
                    <Redirect to="/" />
                ) : (
                        Dashboard
                    )
            )} />
        );
    }
}

export default Dashboard;