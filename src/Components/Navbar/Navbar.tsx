import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/es';
import axios from 'axios';
import './Styles.css'

interface NavConstructor {
  Params: any,
  Dollar: any,
  Euro: any,
  UFs: any,
  UTM: any

}

const apiInput: any = process.env.REACT_APP_DEFAULT_INPUT
const apiKey: any = process.env.REACT_APP_API_KEY

export class Appbar extends React.Component<{}, NavConstructor> {
  constructor(props: any) {
    super(props);
    this.state = {
      Params: ["dolar", "euro", "uf", "utm"],
      Dollar: '',
      Euro: '',
      UFs: '',
      UTM: ''
    }
  }

  componentDidMount() {
    let dollarQuery: string = `${apiInput}${this.state.Params[0]}?apikey=${apiKey}&formato=json`
    let euroQuery: string = `${apiInput}${this.state.Params[1]}?apikey=${apiKey}&formato=json`
    let ufQuery: string = `${apiInput}${this.state.Params[2]}?apikey=${apiKey}&formato=json`
    let utmQuery: string = `${apiInput}${this.state.Params[3]}?apikey=${apiKey}&formato=json`

    axios.get(dollarQuery).then(res => { this.setState({ Dollar: res.data.Dolares[0] }) })
      .catch(err => { console.log(err) })

    axios.get(euroQuery).then(res => { this.setState({ Euro: res.data.Euros[0] }) })
      .catch(err => { console.log(err) })

    axios.get(ufQuery).then(res => { this.setState({ UFs: res.data.UFs[0] }) })
      .catch(err => { console.log(err) })

    axios.get(utmQuery).then(res => { this.setState({ UTM: res.data.UTMs[0] }) })
      .catch(err => { console.log(err) })

  }

  render() {
    const { Dollar, Euro, UFs, UTM } = this.state;

    return (
      <Navbar collapseOnSelect expand="lg" className="custom-nav">
        <Navbar.Brand style={{marginRight: '3rem'}} href="#home">SBIF Challenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="collapse">
          <Nav className="mr-auto">
            <Nav.Link >
              Indicadores al {moment().format("LL")} :
            </Nav.Link>
            <Nav.Link >
              Dólar: ${Dollar.Valor}
            </Nav.Link>
            <Nav.Link >
              Euro: ${Euro.Valor}
            </Nav.Link>
            <Nav.Link >
              UF: ${UFs.Valor}
            </Nav.Link>

            <Nav.Link >
              UTM: ${UTM.Valor}
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Appbar;