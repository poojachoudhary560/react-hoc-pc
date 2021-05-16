import React from 'react';
import hocEmployeeWrapper from './hocEmployeeWrapper';

const EmployeeDetails = props => {
  return (
    <div>
      <div>Employee Name: {props.name}</div>
      <div>Employee Salary: {props.salary}</div>
      <div>Employee Bonus: {props.bonus}</div>
    </div>
  );
};

const HocEmployeeDetails = hocEmployeeWrapper(EmployeeDetails);

export default HocEmployeeDetails;
