import React from 'react'
import {connect} from 'react-redux'
import loaderimg from '../ajax-loader.gif'

let Loader = ({state}) => {
    return (
        <div style={{textAlign: 'center'}}>
            {state ? <img src={loaderimg} alt=''/> : null}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        state: state.isLoading
    }
};

Loader = connect(mapStateToProps)(Loader);
export default Loader