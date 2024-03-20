import { SnackProvider } from '../../context/snacksContext'
import ProductList from './productList'

import {useLocation} from 'react-router-dom'

function MainPage() {
  const {pathname}=useLocation()

  return ( 
    <SnackProvider>
     
     <ProductList/>
      {/* <Outlet/> */}
    </SnackProvider>
  )
}

export default MainPage