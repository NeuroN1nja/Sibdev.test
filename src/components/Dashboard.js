import React, { Component } from 'react'
import { Row, Container } from 'reactstrap';
import ApiCard from './ApiView/ApiCard'
import { connect } from 'react-redux'

const mapState = state => {
    return {
        user: state.selectedUser
    }
}

class Dashboard extends Component {
    state = {  }

    render() {
        return (
            <Container>
                <Row>
                    {this.props.user.cards ?
                        this.props.user.cards.map(card => (
                            <ApiCard card={card} key={card}/>
                        ))
                        : 'Please create user in settings or select user from Users list in menu'
                    }

                </Row>
            </Container>
        );
    }
}

export default connect(mapState)(Dashboard);