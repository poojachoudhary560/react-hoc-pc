import React from 'react';
import hocEmployeeWrapper from './hocEmployeeWrapper';

const EmployeeSalary = props => {
  return (
    <div>
      <div>Employee Name: {props.name}</div>
      <div>Employee Age: {props.age}</div>
      <div>Employee Designation: {props.designation}</div>
    </div>
  );
};

const HocEmployeeSalary = hocEmployeeWrapper(EmployeeSalary);

export default HocEmployeeDetails;
