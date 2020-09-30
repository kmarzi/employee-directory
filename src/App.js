import React from 'react';
import './App.css';
import TableData from './components/TableData';
import Header from './components/jumbotron';
import Search from './components/Search';
import Employee from './employee.json';

class App extends React.Component {

  state = {
    employees: Employee,
    shadowEmployee: Employee,
    sortOrderName: "asc"
    // sortOrderPhone: null
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
  compareName(employee1, employee2) {
    if (employee1.name > employee2.name) {
      return 1
    } else if (employee1.name === employee2.name) {
      return 0
    } else {
      return -1
    }

  }
  sortByName = () => {
    console.log("hit")
    let sortedEmployees;
    if (this.state.sortOrderName === "asc") {
      console.log("asc")
      sortedEmployees = this.state.employees.slice().sort(this.compareName)
      this.setState({ sortOrderName: "des" })
    } else if (this.state.sortOrderName === "des") {
      console.log("des")
      sortedEmployees = this.state.employees.slice().sort(this.compareName).reverse()
      this.setState({ sortOrderName: "asc" })
    } else {
      console.log("null")
      sortedEmployees = this.state.shadowEmployee
      this.setState({ sortOrderName: "asc" })
    }

    this.setState({ employees: sortedEmployees })
  }


  // comparePhone(employee1, employee2) {
  //   if (employee1.phone > employee2.phone) {
  //     return 1
  //   } else if (employee1.phone === employee2.phone) {
  //     return 0
  //   } else {
  //     return -1
  //   }

  // }
  // sortByPhone = () => {
  //   let sortedEmployeesPhone;
  //   if (this.state.sortOrderPhone === "asc") {
  //     sortedEmployeesPhone = this.state.employees.slice().sort(this.comparePhone)
  //     this.setState({ sortOrderPhone: "des" })
  //   } else if (this.state.sortOrderPhone === "des") {
  //     sortedEmployeesPhone = this.state.employees.slice().sort(this.comparePhone).reverse()
  //     this.setState({ sortOrderName: null })

  //   } else {
  //     sortedEmployeesPhone = this.state.shadowEmployee
  //     this.setState({ sortOrderPhone: "asc" })
    // }

    // this.setState({ employees: sortedEmployees })


  render() {
    return (
      <div className="container">
        <Header />
        <Search searchEmployee={this.handleInputChange} />
        <TableData state={this.state} sortABC={this.sortByName} />
      </div>
    );
  }
};

export default App;
