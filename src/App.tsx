import React from 'react';
import './App.css';
import Appbar from './Components/Navbar/Navbar'
import Description from './Components/Description/Description'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <React.Fragment>
      <Appbar />
      <Container fluid>

        <Row className="row">
          <Col className="left">Col 1</Col>
          <Col className="center" xs={8} md={8}>
            <Description />
          </Col>
          <Col className="right">Col 3</Col>
        </Row>

      </Container>
    </React.Fragment>


  );
}

export default App;
