import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Col } from 'reactstrap';
import { deleteUser, selectForUpdate } from './actions'

const mapState = state => {
    return {
        user: state.selectedUser
    }
}

const actions = {
    deleteUser,
    selectForUpdate
}

class ActiveUser extends Component {

    userDelete = () => {
        this.props.deleteUser(this.props.user.id)
    }

    startUpdatingUser = () => {
        this.props.selectForUpdate()
    }

  render() {
    return (
        <Col sm={{ size: 6, order: 2, offset: 1 }}>
            {this.props.user.name &&
                <div>
                    <h5>Name:</h5>
                    <p>{this.props.user.name}</p>
                    <h5>Lastname:</h5>
                    <p>{this.props.user.lastname}</p>
                    <h5>About:</h5>
                    <p>{this.props.user.about}</p>
                    <h5>City:</h5>
                    <p>{this.props.user.city}</p>
                    <Button outline color="primary" onClick={this.startUpdatingUser}>Update</Button>{' '}
                    <Button outline color="danger" onClick={this.userDelete}>Delete</Button>
                </div>
            }
        </Col>
    )
  }
}

export default connect(mapState, actions)(ActiveUser)
