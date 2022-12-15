import React from "react"
import { Nav, Navbar, Container} from "react-bootstrap"

const NavBar = () => {
        return(
            <Navbar variant="dark" className="navbar-custom">
            <Container>
                <Navbar.Brand href="/users">WELCOME TO MANAGEMENT APP</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav.Link href="/form">Add User</Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )

}

export default NavBar;