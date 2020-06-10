import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Styles.css'

export class Appbar extends React.Component {
  render() {
    return (
<Navbar collapseOnSelect expand="lg" className="custom-nav">
  <Navbar.Brand href="#home">SBIF</Navbar.Brand>
  
</Navbar>
    )
  }
}

export default Appbar;