import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store'

import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Roboto']
    }
});

class Root extends Component {
    state = {  }
    render() {
        console.log('render')
        return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>  
        );
    }
}

ReactDOM.render(<Root />, document.querySelector('#app'))