export const urlBuilder = (query = 'random', limit = 25, offset = 0, rating = 'G', lang = 'en') => {
    const url = process.env.REACT_APP_API_URL + 'search?' +
        'api_key=' + process.env.REACT_APP_API_KEY +
        '&q=' + query +
        '&limit=' + limit +
        '&offset=' + offset +
        '&fating=' + rating +
        '&lang=' + lang
    return url
}