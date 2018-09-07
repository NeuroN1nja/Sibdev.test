import React, { Component } from 'react'
import { Form, Col, Button } from 'reactstrap';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import { reduxForm, Field } from 'redux-form'
import TextInput from './TextInput'
import { connect } from 'react-redux'
import {addUser} from './actions'

const actions = {
  addUser
}

const validate = combineValidators({
  name: composeValidators(
    isRequired({ message: 'The name is required' }),
    hasLengthGreaterThan(2)({ message: 'lastname needs to be at least 3 character' })
  )(),
  lastname: composeValidators(
    isRequired({ message: 'The lastname is required' }),
    hasLengthGreaterThan(2)({ message: 'lastname needs to be at least 3 character' })
  )(),
  about: composeValidators(
    isRequired({ message: 'Please write something about you' }),
    hasLengthGreaterThan(14)({ message: 'This field needs to be at least 15 character' })
  )(),
  city: isRequired({ message: 'Please say where you from' })
})

class CreateUserForm extends Component {

  onFormSubmit = (values) => {
    this.props.addUser(values)
    this.props.reset()
  }

  render() {
    return (
      <Col sm={3}>
        <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          <Field
            name='name'
            type='text'
            component={TextInput}
            placeholder='User name'
            label={'Name'}
          />
          <Field
            name='lastname'
            type='text'
            component={TextInput}
            placeholder='User lastname'
            label={'Lastame'}
          />
          <Field
            name='about'
            type='textarea'
            component={TextInput}
            placeholder='About'
            label={'About'}
          />
          <Field
            name='city'
            type='text'
            component={TextInput}
            placeholder='City'
            label={'City'}
          />
          <Button>Create User</Button>{' '}
          <Button onClick={this.props.reset}>Reset</Button>
        </Form>
      </Col>
    )
  }
}

export default connect(null, actions)(
  reduxForm({ form: 'createUser', enableReinitialize: true, validate })(CreateUserForm)
)
