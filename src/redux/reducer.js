import { combineReducers } from 'redux'

import {
    PHOTOS_LIBRARY,
    SEARCH_QUERY
} from './actions'

const initialState = {
    photoLibrary: [],
    currentPhotoIndex: 0
}

const galleryDemoReducer = (state = initialState, action) => {
    switch (action.type) {
        case PHOTOS_LIBRARY:
            return { ...state, photoLibrary: action.payload }
        case SEARCH_QUERY:
            return { ...state, searchQuery: action.payload }
        default:
            return state;
    }
}

export default combineReducers({
    gallery: galleryDemoReducer
}) 