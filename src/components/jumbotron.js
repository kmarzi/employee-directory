import React from 'react';
import {Jumbotron} from 'react-bootstrap';


const styles = {
    headerStyle: {
      background: "pink",
      marginLeft: "auto",
      textAlign: "center",
      marginRight: "auto",
      height: "175px",
    },
    h1: {
        fontFamily: "verdana",
        fontWeight: "bold",
        fontSize: "55px",
    },
    p: {
        fontFamily: "verdana",

    },
  };


function Header() {
return (
    <Jumbotron fluid style={styles.headerStyle}>
      <h1 style={styles.h1}>Employee Directory</h1>
      <p>
        Filter by heading or use search box to narrow your results. 
      </p>
    
    </Jumbotron>
  );
}

export default Header;
