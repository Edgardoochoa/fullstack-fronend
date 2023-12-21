import { useNavigate } from 'react-router-dom'
import useCreateMovie from '../hooks/useCreateMovie'
import { postcreateMovie } from '../services/movieServices'
import '../styles/createMovie.css'

const CreateMovie = () => {
  const navigate = useNavigate()

  const datos = {
    title: '',
    original_language: '',
    description: '',
    image: '',
    popularity: '',
    release_date: ''
  }

  const senData = async (data) => {
    try {
      const response = await postcreateMovie(data)
      if (response.status === 201) {
        console.log('movie creada exitosamente')
        navigate('/')
      }
      console.log(response)
    } catch (error) {
      console.log('ocurrio un error en createMovie', error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useCreateMovie(senData, datos)

  return (
    <>
      <div className='container-1'>
        <div className='wrapper'>
          <form onSubmit={handleSubmit} action=''>
            <h1>Create Movie</h1>

            <div className='input-box'>
              <input
                type='text'
                name='title'
                placeholder='title'
                value={input.title}
                onChange={handleInputChange}
              />
              <i className='bx bx-user' />
            </div>

            <div className='input-box'>
              <input
                type='text'
                name='original_language'
                placeholder='English'
                value={input.original_language}
                onChange={handleInputChange}
              />
              <i className='bx bx-user' />
            </div>

            <div className='input-box'>
              <input
                type='text'
                name='description'
                placeholder='pelicula de accion'
                value={input.description}
                onChange={handleInputChange}
              />
              <i className='bx bx-movie-play' />
            </div>

            <div className='input-box'>
              <input
                type='text'
                name='image'
                placeholder='url de la imagen'
                value={input.image}
                onChange={handleInputChange}
              />
              <i className='bx bx-image' />
            </div>

            <div className='input-box'>
              <input
                type='text'
                name='popularity'
                placeholder='123.897'
                value={input.popularity}
                onChange={handleInputChange}
              />
              <i className='bx bx-signal-4' />
            </div>

            <div className='input-box'>
              <input
                type='text'
                name='release_date'
                placeholder='12/06/2001'
                value={input.release_date}
                onChange={handleInputChange}
              />
              <i className='bx bx-calendar' />
            </div>

            <button className='btn' type='submit'>Create</button>

          </form>
        </div>
      </div>
    </>

  )
}
export default CreateMovie
