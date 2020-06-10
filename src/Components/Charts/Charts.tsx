import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Button, Container, Col, Row } from 'react-bootstrap'
import * as _ from 'lodash';
import moment from 'moment';
import * as Utils from '../Utils/Utils'
import './Styles.css'


interface DateConstructor {
    StartDate: any
    EndDate: any,
    StartDateApi: any,
    EndDateApi: any,
    dataX: any, 
    dataY: any,

}



const apiInput = process.env.REACT_APP_API_INPUT;
const apiKey = process.env.REACT_APP_API_KEY;

export class Charts extends React.Component<{}, DateConstructor> {
    constructor(props: any) {
        super(props)
        this.state = {
            StartDate: new Date(),
            EndDate: new Date(),
            StartDateApi: '',
            EndDateApi: '',
            dataX: '',
            dataY: '',
     

        }
        this.onChangeStart = this.onChangeStart.bind(this);
        this.onChangeEnd = this.onChangeEnd.bind(this);
        this.getData = this.getData.bind(this)
    }


    async componentDidMount(){
        let startDate: any = Utils.destructuredDate("2020-05-01", true)
        let endDate: any = Utils.destructuredDate(moment().format("YYYY-MM-DD"), false)
       await axios.get(`${apiInput}${startDate}/${endDate}?apikey=${apiKey}&formato=json`)
            .then(res => {
                const result = res.data.Dolares;
                this.setState({dataX: _.map(result, 'Fecha'), dataY: _.map(result, 'Valor')})
                console.log("result", this.state.dataX)
            })
            .catch(err => console.log(err))
    }
    
    getData() {

        axios.get(`${apiInput}${this.state.StartDateApi}/${this.state.EndDateApi}?apikey=${apiKey}&formato=json`)
            .then(res => {
                const result = res.data.Dolares;
                this.setState({dataX: _.map(result, 'Fecha'), dataY: _.map(result, 'Valor')})
                console.log("result", this.state.dataX)
            })
            .catch(err => console.log(err))

    }

    onChangeStart(e: any) {
        this.setState({ StartDate: e.target.value, StartDateApi: Utils.destructuredDate(e.target.value, true) })
        console.log("Start", e.target.value);

    }

    onChangeEnd(e: any) {
        this.setState({ EndDate: e.target.value, EndDateApi: Utils.destructuredDate(e.target.value, false)})
        console.log("End", e.target.value);

    }

    render() {
        const { StartDate, EndDate, dataX, dataY } = this.state
        const data = {
            labels: Utils.formatDate(dataX),
            datasets: [
              {
                label: 'Valores $',
                data: Utils.replacer(dataY),
                fill: false,          // Don't fill area under the line
                borderColor: 'green'  // Line color
              }
            ]
          }

        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col md={5} className="col-styles">
                            <input type="date" value={StartDate} onChange={this.onChangeStart}></input>
                            
                        </Col>

                        <Col md={5} className="col-styles">
                        <input type="date" min={StartDate} value={EndDate} onChange={this.onChangeEnd}></input>
                        </Col>
                        <Col md={2} className="col-styles">
                        <Button onClick={this.getData} variant="primary">Consultar</Button>
                        </Col>
                        <Col>
                        <Line data={data}/>
                        </Col>
                    </Row>
                </Container>

                

            </React.Fragment>
        )
    }
}

export default Charts;