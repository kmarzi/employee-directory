import React from 'react';
import Form from 'react-bootstrap/Form'

const styles = {
    searchStyle: {
        background: "",
        marginLeft: "auto",
        textAlign: "center",
        marginRight: "auto",
    }
};


function Search(props) {

    return (
        <div className="col-5" style={styles.searchStyle}>
            <Form>
                <Form.Group>
                    <Form.Control type="text" onChange={e => props.searchEmployee(e)}></Form.Control>
                </Form.Group>
            </Form>
        </div>
    );
}


export default Search;