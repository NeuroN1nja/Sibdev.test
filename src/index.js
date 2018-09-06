import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Roboto']
    }
});

class Root extends Component {
    state = {  }
    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>    
        );
    }
}

ReactDOM.render(<Root />, document.querySelector('#app'))