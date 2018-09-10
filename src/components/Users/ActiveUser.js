import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteUser, selectForUpdate } from './actions'
import { Card, Button, Col } from 'reactstrap'

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
        <Col sm='6'>
            {this.props.user.name &&
                <Card body>
                    <h5>Name:</h5>
                    <p>{this.props.user.name}</p>
                    <h5>Lastname:</h5>
                    <p>{this.props.user.lastname}</p>
                    <h5>About:</h5>
                    <p>{this.props.user.about}</p>
                    <h5>City:</h5>
                    <p>{this.props.user.city}</p>
                    <div>
                    <Button outline color="primary" onClick={this.startUpdatingUser}>Update</Button>{' '}
                    <Button outline color="danger" onClick={this.userDelete}>Delete</Button>
                    </div>
                </Card>
            }
        </Col>
    )
  }
}

export default connect(mapState, actions)(ActiveUser)
