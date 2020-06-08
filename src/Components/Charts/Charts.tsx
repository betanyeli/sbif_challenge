import React from 'react';
import moment from 'moment';
import axios from 'axios';
import { Button } from 'react-bootstrap'


interface DateConstructor {
    StartDate: any
    EndDate: any,
}

const apiInput = process.env.REACT_APP_API_INPUT;
const apiKey = process.env.REACT_APP_API_KEY;

export class Charts extends React.Component<{}, DateConstructor> {
    constructor(props: any) {
        super(props)
        this.state = {
            StartDate: new Date(),
            EndDate: new Date(),

        }
        this.onChangeStart = this.onChangeStart.bind(this);
        this.onChangeEnd = this.onChangeEnd.bind(this);
        this.getData = this.getData.bind(this)
    }

    getData() {
        axios.get(`${apiInput}2010/01/dias_i/04/2010/01/dias_f/05?apikey=${apiKey}&formato=json`)
            .then(res => {
                const result = res.data;
                console.log("result", result)
            })
            .catch(err => console.log(err))

    }

    onChangeStart(e: any) {
        this.setState({ StartDate: e.target.value })
        console.log("Start", e.target.value);

    }

    onChangeEnd(e: any) {
        this.setState({ EndDate: e.target.value })
        console.log("End", e.target.value);

    }

    render() {
        const { StartDate, EndDate } = this.state

        return (
            <React.Fragment>
                <input type="date" value={StartDate} onChange={this.onChangeStart}></input>
                <input type="date" min={StartDate} value={EndDate} onChange={this.onChangeEnd}></input>
                <Button onClick={this.getData} variant="primary">Click me</Button>

            </React.Fragment>
        )
    }
}

export default Charts;