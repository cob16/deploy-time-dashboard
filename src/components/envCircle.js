import React from 'react';
import {colours} from "../style";
import {Circle} from "./circle";
import box from "../box.svg";

export class EnvCircle extends React.Component {
    render() {
        return (
            <Circle backgroundColor={colours.primary}>
                <img style={{height: 'auto', width: "100%"}} alt={""} src={box}/>
            </Circle>
        )
    }
}

