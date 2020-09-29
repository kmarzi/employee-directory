import React from 'react';
import { Table } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

function TableData(props) {

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
          {props.state.employees.map(Employee => (
            <tr>
              <td>{Employee.id}</td>
              <td>{Employee.name}</td>
              <td>{Employee.phone}</td>
              <td>{Employee.email}</td>
            </tr>
          ))}
        </tbody>

      </Table>

    )
}


export default TableData;