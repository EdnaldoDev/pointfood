import { SnackProvider } from '../../context/snacksContext'
import ProductList from './productList'

import {useLocation} from 'react-router-dom'

function MainPage() {
  return ( 
    <SnackProvider>
     
     <ProductList/>
      {/* <Outlet/> */}
    </SnackProvider>
  )
}

export default MainPage