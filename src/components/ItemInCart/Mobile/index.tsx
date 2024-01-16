
import {useState,useContext} from 'react'

import { SnackData } from '../../../types/SnackData'
import { Snack } from './styles'
import { FaTrash } from 'react-icons/fa'
import { CartContext } from '../../../context/cartContext'
import { CartData } from '../../../types/cartItems'
import { formatcurrency } from '../../../Helpers/functions'

interface SnackItemProps{
    snack:CartData
}

export default function SnackItem({snack}:SnackItemProps) {
    const {removeFromCart, cartItems, setCartItems}=useContext(CartContext)

    const [qtd, setQtd]=useState(snack.quantity)

    const increment=()=>{
        
        setQtd(qtd+1)

        let updatedItems=cartItems.map((item)=> {
            if(item.id===snack.id && item.name===snack.name){
                item.quantity=qtd+1
                item.subtotal=item.quantity*item.price
            }
            return item
        })
        setCartItems(updatedItems)
        
    }
    const decrement=()=>{
        setQtd(qtd-1)

        let updatedItems=cartItems.map((item)=> {
            if(item.id===snack.id && item.name===snack.name){
                item.quantity=qtd-1
                item.subtotal=item.quantity*item.price
            }
            return item
        })
        setCartItems(updatedItems)
    }



  return (
    <Snack>
        <div>
            <img src={snack.image} alt='snack name foto'/>
        </div>

        <div>
            <strong>{snack.name}</strong>
            <p>R$ {snack.price}</p>

            <div  className='actions'>
                <div>
                    <button type="button" onClick={decrement}>-</button>
                    <input type="number" readOnly value={qtd} min={0} />
                    <button type="button" onClick={increment}>+</button>
                </div>
                <div>
                    <button onClick={()=>removeFromCart(snack.id)}><FaTrash/></button>
                </div>
            </div>

            <div>Subtotal <span>{formatcurrency(snack.subtotal)}</span></div>

        </div>
    </Snack>
  )
}
