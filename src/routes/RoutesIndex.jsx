import { Route, Routes, Navigate } from 'react-router-dom'
import { Home, Login, Dashboard, Signup } from '../pages/index'
import { useAuthContext } from '../hooks/useAuthContext'
import MovieDetail from '../pages/MovieDetail'
import CreateMovie from '../pages/CreateMovie'
import UpdateMovie from '../pages/UpdateMovie'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
      <Route
        path='/'
        element={
        isAuth
          ? <Home />
          : <Navigate to='/login' replace />
      }
      />
      <Route path='/Login' element={<Login />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/create' element={<CreateMovie />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/movies/:id' element={<MovieDetail />} />
      <Route path='/movies/update/:id' element={<UpdateMovie />} />
    </Routes>
  )
}
export default RoutesIndex
