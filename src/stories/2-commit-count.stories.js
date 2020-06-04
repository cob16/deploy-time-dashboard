import React from 'react';
import {CommitCircle} from "../components/commitCircle";
import {colours} from "../style";

export default {
  title: 'Commit Circle',
  component: CommitCircle,
};

export const normal = () => (
  <CommitCircle/>
);

export const nonPlural = () => (
    <CommitCircle numberOfCommits={1}/>
);

export const warning = () => (
  <CommitCircle numberOfCommits={3} highlightColor={colours.warning}/>
);

export const danger = () => (
  <CommitCircle numberOfCommits={20} highlightColor={colours.danger}/>
);