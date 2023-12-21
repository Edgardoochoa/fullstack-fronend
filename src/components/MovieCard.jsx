import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/MovieCard.css'

const MovieCard = ({ movie }) => {
  const [like, setLike] = useState(0)
  const [noLike, setNoLike] = useState(0)

  return (
    <>
      <div>
        <Link to={`/movies/${movie._id}`}>
          <img
            width={230}
            height={345}
            src={movie.image}
            alt={movie.title}
          />
        </Link>
        <div className='i_boton'>
          <div>
            <i className='bx bx-like i' onClick={() => setLike((like) => like + 1)}>{like}</i>
          </div>
          <div>
            <i className='bx bx-dislike i' onClick={() => setNoLike((noLike) => noLike + 1)}>{noLike}</i>
          </div>
        </div>
        <h4>{movie.title}</h4>
      </div>
    </>
  )
}
export default MovieCard
