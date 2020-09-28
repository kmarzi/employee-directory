import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'

const styles = {
    searchStyle: {
        background: "",
        marginLeft: "auto",
        textAlign: "center",
        marginRight: "auto",
    }

};

function Search() {
    return (
                <div className="col-5" style={styles.searchStyle}>
                    <InputGroup className="mb-3" >
                        <InputGroup.Prepend>
                            <InputGroup.Text>Search</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl />
                    </InputGroup>
                </div>


    );

}

export default Search;