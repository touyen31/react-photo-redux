import axios from 'axios'
export const REQUEST_PHOTO = 'REQUEST_PHOTO'
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO'
export const UPDATE_TEXT = 'UPDATE_TEXT'
export const RECEIVE_ERROR = 'RECEIVE_ERROR'
export const LOADMORE = 'LOADMORE'
export  const RECV_LOADMORE = 'RECV_LOADMORE'


export function requestphotos() {
    return {
        type: REQUEST_PHOTO,
    }
}

export function receivetphotos(data) {
    return {
        type: RECEIVE_PHOTO,
        data
    }
}

export function receivetphotosloadmore(data) {
    return {
        type: RECV_LOADMORE,
        data
    }
}
export function updatetext(text) {
    return {
        type: UPDATE_TEXT,
        text
    }
}
export function receiveerror() {
    return {
        type: RECEIVE_ERROR,
    }
}

export function searchphoto(text) {
    return dispatch => {
        dispatch(requestphotos())
        return axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ac9fd35025c930e3ea8d613813e10434&tags=${text}&extras=owner_name%2Curl_n%2Cviews&per_page=20&page=1&format=json&nojsoncallback=1`)
            .then(res =>{
                dispatch(receivetphotos(res.data.photos))
            })
            .catch(e => dispatch(receiveerror()))
    }

}

export function loadmore(text, page, maxpage) {
    console.log(page, maxpage)
    if(page>maxpage)
        return {type: 'NONE'}
    return dispatch => {
        dispatch(requestphotos())
        return axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ac9fd35025c930e3ea8d613813e10434&tags=${text}&extras=owner_name%2Curl_n%2Cviews&per_page=20&page=${page}&format=json&nojsoncallback=1`)
            .then(res =>{
                dispatch(receivetphotosloadmore(res.data.photos))
            })
            .catch(e => dispatch(receiveerror()))
    }
}

