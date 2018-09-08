import React from 'react'
import { Row, Container } from 'reactstrap';
import CreateUserForm from './UserForm/CreateUserForm'
import ActiveUser from './ActiveUser'


const Settings = props => {
    return (
      <Container>
        <Row>
          <CreateUserForm />
          <ActiveUser />
        </Row>
      </Container>
    )
}

export default Settings
