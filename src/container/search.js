import Search from '../components/Search'
import { connect } from 'react-redux'
import {searchphoto, updatetext, loadmore} from '../Actions'

const mapStateToProp=(state, ownProp)=>{
    return{
        photos: state.search.photos,
        text: state.search.text,
        loading: state.search.loading,
        page: state.search.page,
        maxPage: state.search.maxPage
    }
}
const mapDispatchToProp = dispatch => {
    return {
        search: text => dispatch(searchphoto(text)),
        updatetext: text => dispatch(updatetext(text)),
        loadmore: (text, page, maxPage) => dispatch(loadmore(text, page, maxPage))
    }
}

export  default connect(mapStateToProp, mapDispatchToProp)(Search)
