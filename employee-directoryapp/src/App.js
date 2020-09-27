import React from 'react';
import './App.css';
import TableData from './components/TableData'
import Header from './components/jumbotron'
import Search from './components/section'



function App() {
  return (
    <div className ="container">
    <Header/>
    <Search/>
    <TableData/>
    
    </div>
  );
}

export default App;
