import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getMoviesById } from '../services/movieServices'
import '../styles/Details.css'

const MovieDetail = () => {
  const [movie, setMovie] = useState([])
  const { id } = useParams()
  const [like, setLike] = useState(0)
  const [noLike, setNoLike] = useState(0)

  useEffect(() => {
    getMoviesById(id)
      .then(data => setMovie(data.data))
  }, [id])

  return (

    <>

      <div className='card-1'>
        <div className='card-2'>
          <img className='img' src={movie.image} alt={movie.title} />
        </div>
      </div>
      <div className='desciption-title'>
        <h4>{movie.title}</h4>
        <div className='i_boton'>
          <div>
            <i className='bx bx-like i' onClick={() => setLike((like) => like + 1)}>{like}</i>
          </div>
          <div>
            <i className='bx bx-dislike i' onClick={() => setNoLike((noLike) => noLike + 1)}>{noLike}</i>
          </div>
          <button className='Boton'>Eliminar</button>
          <Link to={`/movies/update/${movie._id}`}>
            <button className='Boton'>Actualizar</button>
          </Link>
        </div>
        <p>{movie.description}</p>
      </div>

    </>

  )
}

export default MovieDetail
