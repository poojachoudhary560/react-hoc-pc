import React from 'react';
import hocEmployeeWrapper from './hocEmployeeWrapper';

const EmployeeDetails = props => {
  return (
    <div>
      <div>Employee Name: {props.name}</div>
      <div>Employee Age: {props.age}</div>
      <div>Employee Designation: {props.designation}</div>
    </div>
  );
};

const HocEmployeeDetails = hocEmployeeWrapper(EmployeeDetails);

export default HocEmployeeDetails;
