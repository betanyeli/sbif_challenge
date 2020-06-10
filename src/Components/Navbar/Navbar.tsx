import React from 'react';
import { Navbar} from 'react-bootstrap';
import {Typewriter} from 'typewriter-effect';
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