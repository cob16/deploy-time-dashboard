import React from 'react';
import {colours, fonts} from "../style";

export class TopTitle extends React.Component {

    static defaultProps = {
        title: 'Title'
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}>
                <p style={{
                    display:' inline-block',
                    width: '100%',
                    textAlign: 'center',
                    color: colours.primary,
                    fontFamily: fonts.fontFamily,
                    textTransform: 'capitalize',
                    fontSize: fonts.size.title
                }}>{this.props.title}</p>
                {this.props.children}
            </div>
        )
    }
}

