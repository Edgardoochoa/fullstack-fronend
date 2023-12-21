import axios from 'axios'

const BASE_URL = 'https://frail-fox-shorts.cyclic.app'

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

const registerUserService = (data) => axios.post(`${BASE_URL}/api/users`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/api/users/login`, data)
const getMeUserService = () => axios.get(`${BASE_URL}/api/users/me`)

export { registerUserService, loginUserService, getMeUserService }
