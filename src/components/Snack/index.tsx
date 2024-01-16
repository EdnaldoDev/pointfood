import {useContext} from 'react'

import { CartContext } from "../../context/cartContext"
import { SnackData } from "../../types/SnackData"
import { Container } from "./styles"
import { formatcurrency } from '../../Helpers/functions'

interface SnackProps{
  snack: SnackData
}
function Snack({snack}:SnackProps) {
  const {addToCart}=useContext(CartContext)

  const handleToCart=(snack:SnackData)=>{
    addToCart(snack)
  }

  return (
    <Container>
        <h3>{snack.name}</h3>
        <img src={snack.image} loading="lazy"/>
        <p>
            {snack.description}
        </p>

        <div>
            <p>{formatcurrency(snack.price)}</p>

            <button onClick={()=>handleToCart(snack)}>+</button>
        </div>

    </Container>
  )
}

export default Snack