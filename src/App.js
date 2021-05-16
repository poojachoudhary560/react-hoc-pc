import React from 'react';
import './style.css';
import UpperCaseUsername from './hocBasic/Username';
import HocEmployeeDetails from './hocEmployee/employeeDetails';
import HocEmployeeSalary from './hocEmployee/employeeSalary';

export default function App() {
  return (
    <div>
      <h3>Users List</h3>
      <UpperCaseUsername>Pooja</UpperCaseUsername>
      <UpperCaseUsername>Sam</UpperCaseUsername>
      <UpperCaseUsername>Kush</UpperCaseUsername>
      <UpperCaseUsername>Rama</UpperCaseUsername>
      <br />
      <HocEmployeeDetails />
      <br />

      <HocEmployeeSalary />
    </div>
  );
}
