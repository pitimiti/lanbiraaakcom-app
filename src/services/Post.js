import queryString from 'query-string'

import { API_URL } from '@env'

export const GetPosts = async (params) => {
    let query = queryString.stringify(params)

    return fetch(API_URL + 'index.php/api/posts?' + query, {
        method: 'GET'
    })
        .then((response) => {
            return response.json()
        })
        .catch((err) => console.log(err))
}
