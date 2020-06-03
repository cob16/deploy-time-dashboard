import React from 'react';
import {Circle} from "../components/circle";
import {EnvCircle} from "../components/envCircle";

export default {
  title: 'Circle',
  component: Circle,
};

export const plain = () => (
    <Circle/>
);

export const enviromentIcon = () => (
    <EnvCircle/>
);