import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Styles.css'

export class Appbar extends React.Component {
  render() {
    return (
<Navbar collapseOnSelect expand="lg" className="custom-nav">
  <Navbar.Brand href="#home">SBIF</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">aQUI</Nav.Link>
      <Nav.Link href="#pricing">VA</Nav.Link>
      <NavDropdown title="ALGO" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">aLGUNA VAINA</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">AQUI TMB</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Y AQUI
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
  }
}

export default Appbar;