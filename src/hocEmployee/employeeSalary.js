import React from 'react';
import hocEmployeeWrapper from './hocEmployeeWrapper';

const EmployeeSalary = props => {
  return (
    <div>
      <div>Employee Name: {props.name}</div>
      <div>Employee Salary: {props.salary}</div>
      <div>Employee Bonus: {props.bonus}</div>
    </div>
  );
};

const HocEmployeeSalary = hocEmployeeWrapper(EmployeeSalary);

export default HocEmployeeSalary;
