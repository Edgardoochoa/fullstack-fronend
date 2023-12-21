import { useState, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { getMeUserService } from '../services/userServices'
import imagen from '../img/4f1438203ed65f2abbf255f335db60fc.jpg'
import '../styles/dashboard.css'

const Dashboard = () => {
  const { userPayload } = useAuthContext()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getMeUserService(userPayload)
        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.error('Ocurrio un error en Dashboard', error.message)
      }
    }
    fetchUserData()
  }, [userPayload])

  return (

    <div className='card-container'>
      <div className='card'>
        <img
          src={imagen}
          className='card-img-top'
          alt=''
        />
        <div className='card-body'>
          {
          userData?.name && <h3>Hola {userData.name}</h3>
        }
          {
          userData?.email && <h5> {userData.email}</h5>
        }
        </div>
      </div>
    </div>

  )
}
export default Dashboard
