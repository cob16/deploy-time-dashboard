import React from 'react';
import {colours, fonts} from "../style";

export class LastDeployMeter extends React.Component {

    static defaultProps = {
        number: 'N/A'
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontFamily: fonts.fontFamily,
                color: colours.primary,
                width: 150,
            }}>
                <meter style={{width: '100%',}} min={0} low={2} optimum={6} high={12} max={48} value={this.props.number}/>
                <p><strong style={{fontSize: fonts.size.number, color: colours.primary}}>{this.props.number}</strong> Hours</p>
            </div>
        )
    }
}

