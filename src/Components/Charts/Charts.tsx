import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Button, Container, Col, Row, Card, Form } from 'react-bootstrap'
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
    Average: any,
    Min: any,
    Max: any,
    init: boolean

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
            Average: '',
            Min: '',
            Max: '',
            init: false


        }
        this.onChangeStart = this.onChangeStart.bind(this);
        this.onChangeEnd = this.onChangeEnd.bind(this);
        this.getData = this.getData.bind(this)
    }


    async componentDidMount() {
        let startDate: any = Utils.destructuredDate("2020-06-01", true)
        let endDate: any = Utils.destructuredDate(moment().format("YYYY-MM-DD"), false)
        await axios.get(`${apiInput}${startDate}/${endDate}?apikey=${apiKey}&formato=json`)
            .then(res => {
                const result = res.data.Dolares;
                this.setState({
                    dataX: _.map(result, 'Fecha'),
                    dataY: _.map(result, 'Valor'),
                })

            })
            .catch(err => console.log(err))



    }

    getData() {

        axios.get(`${apiInput}${this.state.StartDateApi}/${this.state.EndDateApi}?apikey=${apiKey}&formato=json`)
            .then(res => {
                const result = res.data.Dolares;
                this.setState({
                    dataX: _.map(result, 'Fecha'),
                    dataY: _.map(result, 'Valor'),
                    Average: Utils.average(Utils.replacer(this.state.dataY)),
                    Max: Math.max(...Utils.replacer(this.state.dataY)),
                    Min: Math.min(...Utils.replacer(this.state.dataY)),
                    init: true
                });

                return result;

            })
            .catch(err => console.log(err))


    }

    onChangeStart(e: any) {
        this.setState({ StartDate: e.target.value, StartDateApi: Utils.destructuredDate(e.target.value, true) })
        console.log("Start", e.target.value);

    }

    onChangeEnd(e: any) {
        this.setState({ EndDate: e.target.value, EndDateApi: Utils.destructuredDate(e.target.value, false) })
        console.log("End", e.target.value);

    }

    render() {
        const { StartDate, EndDate, dataX, dataY, Average, Max, Min, init } = this.state

        const data = {
            labels: Utils.formatDate(dataX),
            datasets: [
                {
                    label: 'Valores $',
                    data: Utils.replacer(dataY),
                    fill: false,
                    borderColor: 'blue'
                }
            ]
        }

        const options = {
            maintainAspectRatio: false
        }

        return (
            <React.Fragment>
                <Container>
                    <Row className="row">
                        <Col className="col-styles">
                            <Form>
                                <Form.Group>
                                    <Row>
                                        <Col md={6} xs={12}>
                                            <Form.Label>Inicio</Form.Label>
                                            <Form.Control type="date" value={StartDate} onChange={this.onChangeStart} />
                                        </Col>
                                        <Col md={6} xs={12}>
                                            <Form.Label>Fin</Form.Label>
                                            <Form.Control type="date" min={StartDate} value={EndDate} onChange={this.onChangeEnd} />
                                        </Col>
                                    </Row>

                                </Form.Group>
                                <Button onClick={this.getData} variant="primary">Consultar</Button>
                            </Form>


                        </Col>

                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col className="canvas-container">
                            {init ? (<Card style={{ width: '18rem', borderRadius:'10px' }}>
                                <Card.Body>
                                    <Card.Title>Indicadores</Card.Title>

                                    <Card.Text>Promedio: ${Math.floor(this.state.Average)}</Card.Text>
                                    <Card.Text>Valor Máximo: ${this.state.Max}</Card.Text>
                                    <Card.Text>Valor Mínimo: ${this.state.Min}</Card.Text>

                                </Card.Body>
                            </Card>) : <p>Indicadores al {moment().format("LL")}</p>}
                            <Line data={data} options={options} />
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        )
    }
}

export default Charts;