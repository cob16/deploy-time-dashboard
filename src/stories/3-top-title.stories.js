import React from 'react';
import { CommitCircle } from "../components/commitCircle";
import { colours } from "../style" ;
import {TopTitle} from "../components/topTitle";
import {EnvCircle} from "../components/envCircle";

export default {
  title: 'Top Title',
  component: TopTitle,
};

export const withCommitCircle = () => (
    <TopTitle title={'master'}>
        <CommitCircle numberOfCommits={20} highlightColor={colours.danger}/>
    </TopTitle>
);

export const withMannyChildren = () => (
    <TopTitle title={'master'}>
        <CommitCircle numberOfCommits={20} highlightColor={colours.danger}/>
        <br/>
        <EnvCircle/>
    </TopTitle>
);