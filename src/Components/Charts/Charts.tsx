import React from 'react';
import moment from 'moment';


interface DateConstructor {
    StartDate: any
    EndDate: any,

    

}

export class Charts extends React.Component<{}, DateConstructor> {
    constructor(props: any) {
        super(props)
        this.state = {
            StartDate: new Date(),
            EndDate: new Date(),
   


        }
        this.onChangeStart = this.onChangeStart.bind(this);
        this.onChangeEnd = this.onChangeEnd.bind(this);
    }

    onChangeStart(e: any) {
        this.setState({ StartDate: e.target.value})
        console.log("Start", e.target.value);



    }

    onChangeEnd(e: any) {
        this.setState({ EndDate: e.target.value })
        console.log("End", e.target.value);

    }

    render() {
       const { StartDate, EndDate} = this.state

        return (
            <React.Fragment>
                <input type="date" value= {StartDate} onChange={this.onChangeStart}></input>
                <input type="date" value= {EndDate} onChange={this.onChangeEnd}></input>

            </React.Fragment>
        )
    }
}

export default Charts;