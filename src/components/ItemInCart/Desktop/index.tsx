import React from 'react'
import { Div } from './styles'
import { FaTrash } from 'react-icons/fa'

function SnackItemDestok() {
  return (
    <Div>
        <img src='https://i.imgur.com/43yC2Ap.jpg' />

        <div>
            <div>
               <h3> <strong>Produto:</strong> Camiseta da Copa do Mundo de</h3>
               <p>R$ 35.00</p>
            </div>
            <div>
                <div>
                    <button>-</button>
                    <input type="number" name="qtd" id="qtd" />
                    <button>+</button>
                </div>
                <h3>R$70.00</h3>
                <button><FaTrash/></button>
            </div>
        </div>
    </Div>
  )
}

export default SnackItemDestok