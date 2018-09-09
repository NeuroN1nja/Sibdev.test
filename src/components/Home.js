import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import { checkAuth } from './helpers'
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { login } from './Login/actions'


class Home extends Component {
    state = {
        email: '',
        password: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const token = JSON.stringify(this.state.email)
        localStorage.setItem('TestAppAuthToken', token)
        this.setState({
            email: '',
            password: ''
        })
        this.props.login()
    }

    render() {

        const { from } = this.props.location.state || { from: { pathname: "/settings" } }

        if (this.state.logged) {
            return <Redirect to={from} />;
        }
        return (
            
            <Route exact path="/" render={() => (
                checkAuth() ? (
                    <Redirect to="/dashboard" />
                ) : (
                        <Col sm={4}>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="Email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="Password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                    />
                                </FormGroup>

                                <Button>Submit</Button>
                            </Form>
                        </Col>
                    )
            )} />
        );
    }
}

export default connect(null, {login})(Home);