import React from 'react';
import './App.css';
import TableData from './components/TableData';
import Header from './components/jumbotron';
import Search from './components/section';
import Employee from './employee.json'

class App extends React.Component {
  state = {
   Employee
  //  sortOrder: ""
  }
// handleSort= () => {
//   const newSort= this.Employee.sort(function(a,b){
//     return a - b;
//   });
// }
render() {
  return (
    <div className ="container">
    <Header/>
    <Search/>
    <TableData/>
    </div>
  );
}};

export default App;
