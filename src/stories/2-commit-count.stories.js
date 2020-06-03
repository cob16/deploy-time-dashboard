import React from 'react';
import { CommitCircle } from "../components/commitCircle";
import * as colour from "../colours" ;

export default {
  title: 'CommitCircle',
  component: CommitCircle,
};

export const normal = () => (
  <CommitCircle/>
);

export const warning = () => (
  <CommitCircle numberOfCommits={3} highlightColor={colour.warning}/>
);

export const danger = () => (
  <CommitCircle numberOfCommits={20} highlightColor={colour.danger}/>
);
