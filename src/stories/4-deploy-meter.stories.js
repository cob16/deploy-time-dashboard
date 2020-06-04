import React from 'react';
import {LastDeployMeter} from "../components/lastDeployMeter";

export default {
    title: 'Last Deploy Meter',
    component: LastDeployMeter,
};

export const normal = () => (
    <LastDeployMeter number={2}/>
)


export const warning = () => (
        <LastDeployMeter number={16}/>
)

export const danger = () => (
    <LastDeployMeter number={48}/>
)

