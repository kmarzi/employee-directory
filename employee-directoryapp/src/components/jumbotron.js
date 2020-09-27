import React from 'react';
import {Jumbotron} from 'react-bootstrap';


const styles = {
    headerStyle: {
      background: ""
    },
    headingStyle: {
      fontSize: 100
    }
  };


function Header() {
return (
    <Jumbotron fluid style={styles.headerStyle}>
      <h1>Employee Directory</h1>
      <p>
        Filter by heading or use search box to narrow your results. 
      </p>
    
    </Jumbotron>
  );
}

export default Header;
