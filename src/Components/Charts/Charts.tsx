import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

interface DateConstructor{
StartDate: any
}

export class Charts extends React.Component<{}, DateConstructor> {
    constructor(props: any) {
        super(props)
        this.state = {
            StartDate: new Date()
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(date: any) {
        console.log("Moment is working", moment(this.state.StartDate).format("DD-MM-YYYY"))
        this.setState({ StartDate: date })
        
    }

    render() {
        const {StartDate} = this.state
        return (
            <React.Fragment>
                <DateTimePicker
                    onChange={this.onChange}
                    value={StartDate}
                />
            </React.Fragment>
        )
    }
}

export default Charts;