import React from 'react'
import {connect} from 'react-redux'
import {Alert} from 'react-bootstrap';

let ErrorMessage = ({error}) => error ? (<Alert bsStyle="danger">{error.message}</Alert>) : null;

const mapStateToProps = state => {
    return {
        error: state.error
    }
};

ErrorMessage = connect(mapStateToProps)(ErrorMessage);
export default ErrorMessage