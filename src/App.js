import React from 'react';
import './style.css';
import UpperCaseUsername from './hocBasic/Username';
import hocEmployeeDetails from './hocEmployee/employeeDetails';
import hocEmployeeSalary from './hocEmployee/employeeSalary';

export default function App() {
  return (
    <div>
      <h3>Users List</h3>
      <UpperCaseUsername>Pooja</UpperCaseUsername>
      <UpperCaseUsername>Sam</UpperCaseUsername>
      <UpperCaseUsername>Kush</UpperCaseUsername>
      <UpperCaseUsername>Rama</UpperCaseUsername>

      <hocEmployeeDetails />
      <hocEmployeeSalary />
    </div>
  );
}
