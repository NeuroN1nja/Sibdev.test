import React from 'react'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { checkAuth } from './helpers'

const NavBar = (props) => {

    return (
      <Navbar color='dark' light expand='md'>
        {console.log('renderNavBar')}
        <h1 className='logo'>TestApp</h1>
        {checkAuth() &&
          <Nav className="ml-left" navbar>
            <NavItem>
              <NavLink href="/settings/">Settings</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/dashboard/">Dashboard</NavLink>
            </NavItem>
          </Nav>
        }
      </Navbar>
    )

}

export default NavBar
