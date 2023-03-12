import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://imdb-top-100-movies.p.rapidapi.com/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getWatchList() {
        return apiClient.get('/?rapidapi-key=' + import.meta.env.VITE_API_KEY)
    }
}