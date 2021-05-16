import React from 'react';

const toUppercaseHOC = WrappedComponent => props => {
  return (
    <div>
      <WrappedComponent {...props}>
        {props.children.toUpperCase()}
      </WrappedComponent>
    </div>
  );
};

export default toUppercaseHOC;
