import { createContext, useState, useEffect } from 'react'
import { getMovies } from '../services/movieServices'

const MovieContext = createContext()

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchMovieData = async () => {
    try {
      const response = await getMovies()
      if (response.status === 200) {
        setMovies(response.data.movies)
        setLoading(false)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchMovieData()
  }, [])

  const data = {
    movies,
    loading
  }

  return (
    <MovieContext.Provider value={data}>
      {children}
    </MovieContext.Provider>
  )
}

export { MovieProvider, MovieContext }
