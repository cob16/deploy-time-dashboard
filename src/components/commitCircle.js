import React from 'react';
import {primary, shapeUnimportant, fontFamily} from "../colours";

export class CommitCircle extends React.Component {

    static defaultProps = {
        numberOfCommits: 0,
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
                backgroundColor: shapeUnimportant,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <p style={{
                    fontFamily: fontFamily,
                    textAlign: 'center',
                    color: this.props.highlightColor==='transparent' ? primary : this.props.highlightColor,
                    lineHeight: '100%',
                }}>
                    <div style={{fontSize: '2.5em'}}>{this.props.numberOfCommits}</div><br/>commits
                </p>
            </div>
        )
    }
}

