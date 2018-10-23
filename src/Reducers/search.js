import {REQUEST_PHOTO, RECEIVE_PHOTO, RECEIVE_ERROR, UPDATE_TEXT, RECV_LOADMORE} from '../Actions'


const initState ={
    photos:[],
    text:'',
    loading:false,
    error:false,
    page:1,
    maxPage:null
}

function search(state=initState, action) {
    switch (action.type) {
        case REQUEST_PHOTO:
            return Object.assign({},state, {
                loading: true
            })
        case RECEIVE_PHOTO:
            return Object.assign({},state, {photos: action.data.photo, loading: false, page:action.data.page, maxPage:action.data.pages})
        case RECEIVE_ERROR:
            return Object.assign({},state, {error: true})
        case UPDATE_TEXT:
            return Object.assign({},state, {text: action.text})
        case RECV_LOADMORE:
            return Object.assign({},state, {photos:[...state.photos, ...action.data.photo], loading: false, page:action.data.page, maxPage:action.data.pages})
        default:
            return state
    }

}
export default search;