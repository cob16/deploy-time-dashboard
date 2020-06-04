import React from 'react';
import {colours, fonts} from "../style";

export class TopTitle extends React.Component {

    static defaultProps = {
        title: 'Title'
    }

    render() {
        return (
            <div style={{display: 'inline-block'}}>
                <p style={{textAlign: 'center',
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

