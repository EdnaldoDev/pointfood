
import { Container } from './styles'

import {NavLink, useNavigate} from 'react-router-dom'
import {FaHamburger, FaPizzaSlice } from 'react-icons/fa'
import {LuIceCream2} from 'react-icons/lu'
import {MdOutlineLocalDrink} from 'react-icons/md'
import { useContext } from 'react'
import { SnackContext, useSnackContext } from '../../context/snacksContext'
import { useStoreData } from '../../context/storeContext'

function Aside() {
    const {storeData:{cardapio}} = useStoreData()
    
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const selectedItem = event.target.value;
        navigate(`/${selectedItem}`);
    };

  return (
    <Container>
        <nav>
            {
                Object.entries(cardapio).map(([item,value], index )=>(
                    <NavLink to={`/${item}`}>
                        {item.charAt(0).toLocaleUpperCase()+ item.slice(1).toLocaleLowerCase()}
                    </NavLink>
                ))
            }
            {/* <NavLink to='/pizzas'>
                <FaPizzaSlice/>
            </NavLink>
            <NavLink to='/sorvetes'>
                <LuIceCream2/>
            </NavLink>
            <NavLink to='/bebidas'>
                <MdOutlineLocalDrink/>
            </NavLink> */}
        </nav>

        <select onChange={handleSelectChange}>
                {
                    Object.entries(cardapio).map(([item,value], index )=>(
                       <option value={item}>
                        {item.charAt(0).toLocaleUpperCase()+ item.slice(1).toLocaleLowerCase()}
                       </option>
                    ))
                }
            </select>
    </Container>
  )
}

export default Aside