import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import NavBar from './NavBar'

class App extends Component {
    state = {  }
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
                <Route path='/(.+)' render={() => (
                    <div>
                        <div className="main">
                            <Switch>
                                <Route path='/dashboard' component={Dashboard} />
                            </Switch>
                        </div>
                    </div>
                )}
                />
            </div>
        );
    }
}

export default App;