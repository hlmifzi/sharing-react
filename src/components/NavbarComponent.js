import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
const colorNavbar = {
    backgroundColor: '#2196F3'
}
const NavbarComponent = () => {
    return (
        <Navbar style={colorNavbar} variant="dark">
            <Navbar.Brand href="#home">
                Navbar
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Beranda</Nav.Link>
                <Nav.Link href="#features">Visi Misi</Nav.Link>
                <Nav.Link href="#pricing">Ekstrakurikuler</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavbarComponent
