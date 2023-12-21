import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { MovieProvider } from './context/MovieContext'
import RoutesIndex from './routes/RoutesIndex'
import Header from './components/Header'
import './App.css'

function App () {
  return (
    <>
      <AuthProvider>
        <MovieProvider>
          <BrowserRouter>
            <Header />
            <RoutesIndex />
          </BrowserRouter>
        </MovieProvider>
      </AuthProvider>
    </>
  )
}

export default App
