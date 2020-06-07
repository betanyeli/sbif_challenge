import React from 'react';
import DateTimePicker from 'react-datetime-picker';

export class Charts extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    onChange(date: any) {
        this.setState({ date })
    }

    render() {
        const { ...date } = this.state;
        return (
            <React.Fragment>
                <DateTimePicker
                    onChange={this.onChange}
                    value={date}
                />
            </React.Fragment>
        )
    }
}

export default Charts;