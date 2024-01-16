import {useContext} from 'react'

import Skeleton from "../../../components/Skeleton"
import { SnackContext } from "../../../context/snacksContext"
import { Container } from "../styles"
import Snack from '../../../components/Snack'

function IceCream() {

    const {sorvetes}=useContext(SnackContext)
  return (
    <Container>
        <h2>Sorvetes</h2>
        <div  className='snacks'>
        {sorvetes &&
                sorvetes.map(item=>(
                    <Snack key={item.id} snack={item}/>

                ))
            }
            {!sorvetes &&
                    [1,2,3,4,5,6,7,8].map(item=>(
                        <div key={item}>
                            <Skeleton type='title'/>
                            <Skeleton type='thumbnail'/>
                            <Skeleton type='text'/>
                            <Skeleton type='text'/>
                            <div className='d-flex'>
                                <Skeleton type='title'/>
                                <Skeleton type='image'/>
                            </div>
                        </div>

                    ))
                }
        </div>
    </Container>
  )
}

export default IceCream