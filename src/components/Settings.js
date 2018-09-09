import React from 'react'
import { Row, Container } from 'reactstrap';
import CreateUserForm from './Users/CreateUserForm'
import ActiveUser from './Users/ActiveUser'


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
