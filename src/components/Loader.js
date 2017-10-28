import React from 'react'
import {connect} from 'react-redux'
import loaderimg from '../ajax-loader.gif'

let Loader = ({state}) =>
    state ? (<div style={{textAlign: 'center'}}><img src={loaderimg} alt=''/></div>) : null;


const mapStateToProps = state => {
    return {
        state: state.isLoading
    }
};

Loader = connect(mapStateToProps)(Loader);
export default Loader