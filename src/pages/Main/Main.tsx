import { SnackProvider } from '../../context/snacksContext'
import ProductList from './productList'

function MainPage() {
  return (
    <SnackProvider>
     
     <ProductList/>
      {/* <Outlet/> */}
    </SnackProvider>
  )
}

export default MainPage