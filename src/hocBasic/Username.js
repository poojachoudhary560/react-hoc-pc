import React from 'react';
import toUppercaseHOC from './ToUppercaseHOC';
const Username = props => <div>{props.children}</div>;

const UpperCaseUsername = toUppercaseHOC(Username);

export default UpperCaseUsername;
