import React, {Component} from 'react'
import CreateUserForm from './UserForm/CreateUserForm'
import { Button } from 'reactstrap';

class Settings extends Component {
  state = {
    isOpened: false
  }
  toggleOpenForm = () => {
    this.setState({
      isOpened: !this.state.isOpened
    })
  }
  render() {
    return (
      <div>
        <Button onClick={this.toggleOpenForm}>
          {this.state.isOpened ? 'Close form' : 'Add user'}
        </Button>
        {this.state.isOpened &&
          <CreateUserForm />
        }
      </div>
    )
  }
}

export default Settings
