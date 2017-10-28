import {ENTER_URL, RECEIVE_DATA, RECEIVE_ERROR, REQUEST_DATA} from '../actions/index';

const loadRss = (state = {
    url: 'https://habrahabr.ru/rss/best/',
    isLoading: false,
    rssData: null
}, action) => {
    switch (action.type) {
        case ENTER_URL:
            return {
                ...state,
                url: action.url
            };

        case REQUEST_DATA:
            return {
                ...state,
                isLoading: true
            };

        case RECEIVE_DATA:
            return {
                ...state,
                isLoading: false,
                rssData: action.rss
            };

        case RECEIVE_ERROR:
            return {
                ...state,
                isLoading: false,
                code: action.code
            };

        default:
            return state
    }
};


// const rootReducer = combineReducers({
//     loadRss
// });

export default loadRss
