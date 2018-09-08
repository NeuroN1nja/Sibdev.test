import React, { Component } from 'react'
import { Form, Col, Button, Row } from 'reactstrap';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import { reduxForm, Field } from 'redux-form'
import TextInput from './TextInput'
import { connect } from 'react-redux'
import { addUser, updateUser, activeUser, cancelUpdating} from './actions'

const actions = {
  addUser,
  updateUser,
  activeUser,
  cancelUpdating
}

const mapState = state => {
  let user = {}

  if (state.selectedUser.readyForUpdate) {
    user = state.selectedUser
  }

  return {
    initialValues: user,
    selectedUser: state.selectedUser
  }
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

  state = {
    user: this.props.user
  }

  onFormSubmit = (values) => {
    if (this.props.selectedUser && this.props.selectedUser.readyForUpdate) {
      this.props.updateUser(values)
      this.props.activeUser(values)
    } else {
      this.props.addUser(values)
    }
    this.props.reset()
  }

  onFormCancel = () => {
    if (this.props.selectedUser.readyForUpdate) {
      this.props.cancelUpdating()
    }
    this.props.reset()
  }

  componentWillUnmount() {
    this.props.cancelUpdating()
  }

  render() {
    console.log('render form', this.state.user, this.props)
    return (
      <Col sm={{ size: 4, order: 2, offset: 1 }}>
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
          <Button>Save</Button>{' '}
          <Button onClick={this.onFormCancel}>Reset</Button>
        </Form>
      </Col>
    )
  }
}

export default connect(mapState, actions)(
  reduxForm({ form: 'createUser', enableReinitialize: true, validate })(CreateUserForm)
)
