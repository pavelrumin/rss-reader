import {RssLoader} from "../RssLoader";

export const ENTER_URL = 'ENTER_URL';
export const enterUrl = url => ({
    type: ENTER_URL,
    url
});

export const REQUEST_DATA = 'REQUEST_DATA';
export const requestData = () => ({
    type: REQUEST_DATA,
});

export const RECEIVE_DATA = 'RECEIVE_DATA';
export const receiveData = rss => ({
    type: RECEIVE_DATA,
    rss
});

export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const receiveError = code => ({
    type: RECEIVE_ERROR,
    code
});

export const loadRss = url =>
    (dispatch, getState) => {
        dispatch(requestData());

        return new RssLoader().load(url || getState().url)
            .then(rss => dispatch(receiveData(rss)))
            // .then(() => restartTimer(() => dispatch(loadRss())))
            .catch(error => dispatch(receiveError(error)))
    };


// Один из первых вариантов: разместить таймер тут.
// Но вариант с компонентом мне понравился больше
// let timer = null;
// const restartTimer = action => {
//     if (timer) {
//         clearInterval(timer);
//     }
//     timer = setInterval(() => action(), 5 * 60 * 1000); // 5 минут
// };
