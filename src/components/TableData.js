import React from 'react';
import { Table } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

function TableData(props) {

    return (
      <Table striped bordered hover variant="dark">

        <thead>
          <tr>
            <th>#</th>
            {/* <th>Image</th> */}
            <th onClick={props.sortABC}>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.state.employees.map(Employee => (
            <tr key={Employee.id}>
              <td>{Employee.id}</td>
              {/* <td><img src={Employee.image} alt={Employee.image}/></td> */}
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