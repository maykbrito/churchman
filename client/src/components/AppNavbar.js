import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container } from 'reactstrap';

const AppNavbar = () => {

    const [toogleState, setToggleState] = useState({
        isOpen: false
    })

    const toggle = () => {
        setToggleState({
            isOpen: !toogleState.isOpen
          });
    }

    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand href="/">ChurchMan</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={toogleState.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/maykbrito">Create a Church</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar 