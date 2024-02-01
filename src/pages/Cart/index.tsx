
import {useState, useContext} from 'react'

import SnackItem from "../../components/ItemInCart/Mobile"
import { Container } from "./styles"
import { FinishOrder } from "./styles"
import FinishOrderForm from './FinishOrder';
import { CartContext } from '../../context/cartContext';
import { SnackData } from '../../types/SnackData';
import { CartData } from '../../types/cartItems';
import { formatcurrency } from '../../Helpers/functions';

function Cart() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {cartItems}=useContext(CartContext)

  let valuetotal = cartItems.reduce((acc, item) => acc += item.subtotal, 0);

  return (
    <Container>
       <div className='cartItems'>
        {cartItems.length ?
            cartItems.map((snack:CartData)=>(
              <SnackItem key={`${snack.name}-${snack.id}`} snack={snack}/>
            ))
            : <h1>Sem items no carrinho</h1>
          }
       </div>

      {cartItems.length > 0 && <FinishOrder >
          <div>
            Total <span>{formatcurrency(valuetotal)}</span>
          </div>
            <button onClick={handleOpen}>Finalizar pedido</button>
      </FinishOrder>
      }

      <FinishOrderForm items={cartItems} total={valuetotal} open={open} handleClose={handleClose}/>
    </Container>
  )
}

export default Cart