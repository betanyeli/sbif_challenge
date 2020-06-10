import React from 'react';
import * as Texts from '../Utils/Texts.json'

export class Description extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>{Texts.title}</h1>
                <p>{Texts.description}</p>
            </React.Fragment>
        )
    }
}

export default Description;