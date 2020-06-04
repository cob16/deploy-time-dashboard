import React from 'react';
import {colours, fonts} from "../style";
import {Circle} from "./circle";

export class CommitCircle extends React.Component {

    static defaultProps = {
        numberOfCommits: 0,
        highlightColor: 'transparent'
    }

    render() {
        let subtitle = this.props.numberOfCommits === 1 ? 'commit' : 'commits'

        return (
            <Circle borderColor={this.props.highlightColor}>
                <div style={{
                    fontFamily: fonts.fontFamily,
                    textAlign: 'center',
                    color: this.props.highlightColor === 'transparent' ? colours.primary : this.props.highlightColor,
                    lineHeight: '100%',
                }}>
                    <div style={{fontSize: fonts.size.number}}>{this.props.numberOfCommits}</div>
                    <br/>{subtitle}
                </div>
            </Circle>
        )
    }
}

