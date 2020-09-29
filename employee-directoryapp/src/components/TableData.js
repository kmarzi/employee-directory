import React from 'react';
import {Table} from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import Employee from '../employee.json'

class TableData extends React.Component {

  state = {
   Employee
  };

filterEmployee = id => {
  const employees = this.state.employees.filter(Employee => Employee.id !== id);
 
  this.setState({ employees });
};

  render() {
    return (
      <Table striped bordered hover variant="dark">
      
      <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
      {this.state.Employee.map(Employee => (
          <tr>
            <td>{Employee.id}</td>
            <td>{Employee.name}</td>
            <td>{Employee.phone}</td>
            <td>{Employee.email}</td>
          </tr>
      ))}
      </tbody> 
       
        
      </Table>
          
          )};
  }
    
    
    export default TableData;