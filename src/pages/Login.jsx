import useForm from '../hooks/useForm'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
import { loginUserService } from '../services/userServices'
import '../styles/form.css'
import '../styles/Login.css'

const Login = () => {
  const { login } = useAuthContext()
  const navigate = useNavigate()

  const datos = {
    email: '',
    password: ''
  }

  const senData = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        login(response.data.token)
        navigate('/Dashboard')
      }
    } catch (error) {
      console.log('ocurrio un error en Login', error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(senData, datos)

  return (

    <>
      <div className='container-1'>
        <div className='wrapper'>
          <form onSubmit={handleSubmit} action=''>
            <h1>Login</h1>

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
export default Login
