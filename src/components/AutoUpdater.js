import {connect} from 'react-redux'
import {loadRss} from '../actions';

let AutoUpdater = ({hasData, isLoading, onTimer}) => {
    if(hasData && !isLoading) {
        setTimeout(() => onTimer(), 5 * 60 * 1000); // 5 минут
    }

    return null;
};

const mapStateToProps = state => {
    return {
        hasData: !!state.rssData,
        isLoading: state.isLoading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTimer: () => {
            dispatch(loadRss())
        },
    }
};

AutoUpdater = connect(mapStateToProps, mapDispatchToProps)(AutoUpdater);
export default AutoUpdater