import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import './Header.css'

const Header = () => {
  const { isAuth, logout } = useAuthContext()

  const linkIsActive = (isActive) => {
    return isActive ? 'nav-link active' : 'nav-link'
  }

  return (

    <nav className='navbar'>
      <div className='container'>
        <span className='text-logo'>peliculas</span>

        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <NavLink
              to='/'
              className={({ isActive }) => linkIsActive(isActive)}
            >Home
            </NavLink>
          </li>
          {
              isAuth
                ? (
                  <>

                    <li className='nav-item'>
                      <NavLink
                        to='/create'
                        className={({ isActive }) => linkIsActive(isActive)}
                      >Create Movie
                      </NavLink>
                    </li>

                    <li className='nav-item'>
                      <NavLink
                        to='/Dashboard'
                        className={({ isActive }) => linkIsActive(isActive)}
                      >Dashboard
                      </NavLink>
                    </li>

                    <li
                      className='nav-item'
                    >
                      <NavLink
                        to='/'
                        className={({ isActive }) => linkIsActive(isActive)}
                        onClick={logout}
                      >Logout
                      </NavLink>
                    </li>
                  </>
                  )
                : (
                  <>

                    <li className='nav-item'>
                      <NavLink
                        to='/Login'
                        className={({ isActive }) => linkIsActive(isActive)}
                      >Login
                      </NavLink>
                    </li>

                    <li className='nav-item'>
                      <NavLink
                        to='/Signup'
                        className={({ isActive }) => linkIsActive(isActive)}
                      >Signup
                      </NavLink>
                    </li>
                  </>
                  )
            }
        </ul>

      </div>
    </nav>

  )
}
export default Header
