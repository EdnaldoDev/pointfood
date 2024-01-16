
import { Container } from './styles'

import {NavLink} from 'react-router-dom'

import {FaHamburger, FaPizzaSlice } from 'react-icons/fa'
import {LuIceCream2} from 'react-icons/lu'
import {MdOutlineLocalDrink} from 'react-icons/md'

function Aside() {
  return (
    <Container>
        <nav>
            <NavLink to='/'>
                <FaHamburger/>
            </NavLink>
            <NavLink to='/pizzas'>
                <FaPizzaSlice/>
            </NavLink>
            <NavLink to='/sorvetes'>
                <LuIceCream2/>
            </NavLink>
            <NavLink to='/bebidas'>
                <MdOutlineLocalDrink/>
            </NavLink>
        </nav>
    </Container>
  )
}

export default Aside