import useForm from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { registerUserService } from '../services/userServices'
import '../styles/form.css'

const Signup = () => {
  const navigate = useNavigate()

  const datos = {
    name: '',
    email: '',
    password: ''
  }

  const senData = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 201) {
        console.log('Usuario creado exitosamente')
        navigate('/login')
      }
      console.log(response)
    } catch (error) {
      console.log('ocurrio un error en Signup', error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(senData, datos)

  return (
    <>
      <div className='container-1'>
        <div className='wrapper'>
          <form onSubmit={handleSubmit} action=''>
            <h1>Signup</h1>

            <div className='input-box'>
              <input
                type='text'
                name='name'
                placeholder='Edgardo'
                value={input.name}
                onChange={handleInputChange}
              />
              <i className='bx bx-user' />
            </div>

            <div className='input-box'>
              <input
                type='email'
                placeholder='name@example.com'
                name='email'
                value={input.email}
                onChange={handleInputChange}
              />
              <i className='bx bxs-user' />
            </div>

            <div className='input-box'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={input.password}
                onChange={handleInputChange}
              />
              <i className='bx bxs-lock-alt' />
            </div>

            <button className='btn' type='submit'>Sign in</button>
            <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>

          </form>
        </div>
      </div>
    </>

  )
}
export default Signup
