import {Outlet} from 'react-router-dom'
import { SnackProvider } from '../../context/snacksContext'

function MainPage() {
  return (
    <SnackProvider>
     
      <Outlet/>
    </SnackProvider>
  )
}

export default MainPage