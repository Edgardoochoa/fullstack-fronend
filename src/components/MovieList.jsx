import { useMovieContext } from '../hooks/useMovieContext'
import MovieCard from './MovieCard'
import { useState } from 'react'
import '../styles/MovieList.css'

const MovieList = () => {
  const { movies, loading } = useMovieContext()
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filterMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <>
      <div className='input'>
        <h3>Buscar Peliculas</h3>
        <input placeholder='Buscar Peliculas' type='text' value={searchTerm} onChange={handleInputChange} />
      </div>

      <div className='div'>

        {loading && <div>loading...</div>}
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </>
  )
}
export default MovieList
