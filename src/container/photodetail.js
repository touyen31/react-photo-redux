import Search from '../components/PhotoDetail'
import { connect } from 'react-redux'
import {searchphoto, updatetext} from "../Actions";

const mapDispatchToProp = dispatch => {
    return {
        search: text => dispatch(searchphoto(text)),
        updatetext: text => dispatch(updatetext(text))
    }
}

export  default connect(null, mapDispatchToProp)(Search)
