import React, { Component } from 'react'
import { Form, Col, Button, Card } from 'reactstrap';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import { reduxForm, Field } from 'redux-form'
import TextInput from './TextInput'
import { connect } from 'react-redux'
import { addUser, updateUser, activeUser, cancelUpdating} from './actions'
import { shuffle } from '../helpers'

const apiList = ['drupal', 'gify', 'bbc', 'nyt', 'anime']

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
    let cards = shuffle(apiList)
    if (this.props.selectedUser && this.props.selectedUser.readyForUpdate) {
      this.props.updateUser(values)
      this.props.activeUser(values)
    } else {
      this.props.addUser(values, cards)
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
    return (
      <Col sm='6'>
        <Card body>
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
            <Button outline color='success' >Save</Button>{' '}
            <Button outline color='secondary' onClick={this.onFormCancel}>Cancel</Button>
          </Form>
        </Card>
      </Col>
    )
  }
}

export default connect(mapState, actions)(
  reduxForm({ form: 'createUser', enableReinitialize: true, validate })(CreateUserForm)
)
