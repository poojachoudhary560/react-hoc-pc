import React, { Component } from 'react';

function getEmployeeData() {
  return {
    name: 'Pooja',
    age: 30,
    designation: 'Developer',
    salary: 30000,
    bonus: 2000
  };
}

var hocEmployeeWrapper = function(WrappedComponent) {
  return class EmployeeWithData extends Component {
    constructor() {
      super();
      this.state = getEmployeeData();
    }

    render() {
      return (
        <>
          <WrappedComponent {...this.state} />
        </>
      );
    }
  };
};

export default hocEmployeeWrapper;
