import React from 'react';
import {colours} from "../style";

export class Circle extends React.Component {

    static defaultProps = {
        highlightColor: 'transparent'
    }

    render() {
        return (
            <div style={{
                width: 100,
                height: 100,
                borderRadius: 100/2,
                borderStyle: 'solid',
                borderColor: this.props.highlightColor,
                borderWidth: 2,
                backgroundColor: colours.shapeUnimportant,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {this.props.children}
            </div>
        )
    }
}

