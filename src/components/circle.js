import React from 'react';
import {colours} from "../style";

export class Circle extends React.Component {

    static defaultProps = {
        borderColor: 'transparent',
        backgroundColor: colours.shape
    }

    render() {
        return (
            <div style={{
                width: 100,
                height: 100,
                borderRadius: 100/2,
                borderStyle: 'solid',
                borderColor: this.props.borderColor,
                borderWidth: 2,
                backgroundColor: this.props.backgroundColor,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {this.props.children}
            </div>
        )
    }
}

