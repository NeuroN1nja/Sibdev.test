import React, { Component } from 'react'
import { Row, Container } from 'reactstrap';
import ApiCard from './ApiCard'

class Dashboard extends Component {
    state = {  }

    render() {
        return (
            <Container>
                <Row>
                    <ApiCard />
                    <ApiCard />
                    <ApiCard />
                </Row>
            </Container>
        );
    }
}

export default Dashboard;