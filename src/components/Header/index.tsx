import {useContext} from 'react'

import { HeaderT } from "./style";
 import logo from '../../assets/th__1_-removebg-preview.png'

 import {FaShoppingCart, FaUserCircle} from 'react-icons/fa'

 import {NavLink} from 'react-router-dom'
import { CartContext } from "../../context/cartContext";
import { useStoreData } from '../../context/storeContext';

function Header(){
  const {cartItems}=useContext(CartContext)
  const {storeData}=useStoreData()

  return (
    <HeaderT>
        <div>
          {storeData && storeData?.informacoes_negocio.logo &&
          <img src={storeData && storeData?.informacoes_negocio.logo} alt="Logo of site" />
          }
          <h4>{storeData?.nome}</h4>
        </div>

        <div>
          <NavLink to='/carrinho'>
            <FaShoppingCart  size={32}/>
            <span className='bedge'>{cartItems.length}</span>
          </NavLink>
        </div>
    </HeaderT>
  )
}

export default Header