import React from 'react';
import {colours, fonts} from "../style";
import {Circle} from "./circle";

export class CommitCircle extends React.Component {

    static defaultProps = {
        numberOfCommits: 0,
        highlightColor: 'transparent'
    }

    render() {
        return (
            <Circle highlightColor={this.props.highlightColor}>
                <p style={{
                    fontFamily: fonts.fontFamily,
                    textAlign: 'center',
                    color: this.props.highlightColor === 'transparent' ? colours.primary : this.props.highlightColor,
                    lineHeight: '100%',
                }}>
                    <div style={{fontSize: '2.5em'}}>{this.props.numberOfCommits}</div>
                    <br/>commits
                </p>
            </Circle>
        )
    }
}

