import React from 'react';
import {CommitCircle} from "../components/commitCircle";
import {colours} from "../style";
import {TopTitle} from "../components/topTitle";
import {EnvCircle} from "../components/envCircle";
import {LastDeployMeter} from "../components/lastDeployMeter";

export default {
    title: 'Deploy Widget',
    component: TopTitle,
};

export const full = () => (
    <dev style={{display: 'flex', flexWrap: 'wrap'}}>
        <TopTitle title={'master'}>
            <CommitCircle numberOfCommits={20} highlightColor={colours.danger}/>
        </TopTitle>
        <LastDeployMeter number={16}/>
        <TopTitle title={'production'}>
            <EnvCircle/>
        </TopTitle>
    </dev>
);