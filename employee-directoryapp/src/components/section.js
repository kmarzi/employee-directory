import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap'


function Search() {
return (
<InputGroup className="mb-3">
  <InputGroup.Prepend>
    <InputGroup.Text>Search</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl/>
</InputGroup>

);

}

export default Search;