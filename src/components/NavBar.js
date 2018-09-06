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

const NavBar = (props) => {
  return (
    <Navbar color='dark' light expand='md'>
            <h1 className='logo'>TestApp</h1>
    </Navbar>
  )
}

export default NavBar
