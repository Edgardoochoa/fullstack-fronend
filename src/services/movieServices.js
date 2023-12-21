import axios from 'axios'

const BASE_URL = 'https://frail-fox-shorts.cyclic.app'

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = token ? `Bearer ${token}` : ''
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
const getMovies = () => axios.get(`${BASE_URL}/api/movies`)
const getMoviesById = (id) => axios.get(`${BASE_URL}/api/movies/${id}`)
const postcreateMovie = (data) => axios.post(`${BASE_URL}/api/movies`, data)
const deleteMovie = (id) => axios.delete(`${BASE_URL}/api/movies/${id}`)
const updateMovie = (id, data) => axios.delete(`${BASE_URL}/api/movies/${id}`)

export {
  getMovies,
  getMoviesById,
  postcreateMovie,
  deleteMovie,
  updateMovie
}
