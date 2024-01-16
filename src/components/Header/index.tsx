import {useContext} from 'react'

import { HeaderT } from "./style";
 import logo from '../../assets/th__1_-removebg-preview.png'

 import {FaShoppingCart} from 'react-icons/fa'

 import {NavLink} from 'react-router-dom'
import { CartContext } from "../../context/cartContext";

function Header(){
  const {cartItems}=useContext(CartContext)
  return (
    <HeaderT>
        <div>
          <img src={logo} alt="Logo of site" />
          <h4>PointFood</h4>
        </div>

        <NavLink to='/carrinho'>
          <FaShoppingCart  size={32}/>
          <span className='bedge'>{cartItems.length}</span>
        </NavLink>
    </HeaderT>
  )
}

export default Header