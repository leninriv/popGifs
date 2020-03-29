import { urlBuilder } from "../utils"



// Action types
export const PHOTOS_LIBRARY = "PHOTOS_LIBRARY"
export const SEARCH_QUERY = "SEARCH_QUERY"


export const setPhotoLibrary = (searchQuery) => dispatch => {

    const url = urlBuilder(searchQuery)
    fetch(url)
        .then(res => res.json())
        .then((response) => {
            if (response && response.data && response.data.length > 0) {
                dispatch({ type: PHOTOS_LIBRARY, payload: response.data })
                dispatch({ type: SEARCH_QUERY, payload: searchQuery })
                console.log('lenin', url, response.data)
            } 
        })
        .catch(console.log)
}

