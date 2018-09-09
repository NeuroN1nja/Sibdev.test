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
                    <h4>Name:</h4>
                    <p>{this.props.user.name}</p>
                    <h4>Lastname:</h4>
                    <p>{this.props.user.lastname}</p>
                    <h4>About:</h4>
                    <p>{this.props.user.about}</p>
                    <h4>City:</h4>
                    <p>{this.props.user.city}</p>
                    <Button onClick={this.startUpdatingUser}>Update</Button>{' '}
                    <Button onClick={this.userDelete}>Delete</Button>
                </div>
            }
        </Col>
    )
  }
}

export default connect(mapState, actions)(ActiveUser)
