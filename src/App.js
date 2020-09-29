import React from 'react';
import './App.css';
import TableData from './components/TableData';
import Header from './components/jumbotron';
import Search from './components/Search';
import Employee from './employee.json'

class App extends React.Component {

  state = {
    employees: Employee,
    shadowEmployee: Employee
  };


  handleInputChange = (event) => {
    console.log(event.target.value);
    const currentValueArray = event.target.value.toLocaleLowerCase().split("")
    if (currentValueArray.length === 0) {
      this.setState({
        employees: this.state.shadowEmployee
      })
    } else {
      const newEmployee = this.state.shadowEmployee.filter(employee => {
        const fullName = employee.name.toLocaleLowerCase().split("");
        const comparisonArray = [];
        for (let i = 0; i < currentValueArray.length; i++) {
          comparisonArray.push(fullName[i])
        }
        return comparisonArray.join("") === currentValueArray.join("");
      })
      this.setState({
        employees: newEmployee
      })
    }
  }


  render() {
    return (
      <div className="container">
        <Header />
        <Search searchEmployee={this.handleInputChange} />
        <TableData state={this.state}/>
      </div>
    );
  }
};

export default App;
