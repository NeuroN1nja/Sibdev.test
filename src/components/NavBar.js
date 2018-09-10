import React, {Component} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown
} from 'reactstrap'
import { connect } from 'react-redux'
import { checkAuth } from './helpers'
import { activeUser } from './Users/actions'
import { Link } from 'react-router-dom'


const mapState = state => {
  return {
    users: state.users,
    user: state.selectedUser,
    logged: state.logged
  }
}

const actions = {
  activeUser
}


class NavBar extends Component {
  state = {
    dropDownValue: '',
    dropdownOpen: false,
    isMenuOpen: false
  }

  changeValue = e => {
    this.setState({
      dropDownValue: e.currentTarget.textContent
    })
    let activeUser = this.props.users.filter(user => user.id == e.currentTarget.id)[0]
    this.props.activeUser(activeUser)
  }

  toggle = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }

  toggleUserItem = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Navbar color='dark' light expand='md'>
        <h1 className='logo'>TestApp</h1>
        <NavbarToggler onClick={this.toggle} />
        {checkAuth() &&
          <Collapse isOpen={this.state.isMenuOpen} navbar>
          <Nav className="ml-left" navbar>
            <NavItem>
              <Link className='nav-link-router' to="/settings/">Settings</Link>
            </NavItem>

            <NavItem>
              <Link className='nav-link-router' to="/dashboard/">Dashboard</Link>
            </NavItem>

            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleUserItem}>
              <DropdownToggle nav caret>
              {this.props.user.name ? this.props.user.name : 'Users' }
              </DropdownToggle>
              {this.props.users && this.props.users.length > 0 &&
                <DropdownMenu right>
                  {this.props.users.map(user => (
                    <DropdownItem  key={user.id} id={user.id}>
                      <div onClick={this.changeValue} id={user.id}>
                        {user.name + ' ' + user.lastname}
                      </div>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              }
            </ButtonDropdown>
            
          </Nav>
        </Collapse>
        }
      </Navbar>
    )
  }
}


export default connect(mapState, actions)(NavBar)
