import { useEffect, useContext} from "react"
import Skeleton from "../../../components/Skeleton"
import { Container } from "../styles"
import { SnackData } from "../../../types/SnackData"
import Snack from "../../../components/Snack"
import { SnackContext } from "../../../context/snacksContext"

interface DrinksProps {
    snacks: SnackData[]
}
function Drinks() {
   const {drinks}=useContext(SnackContext)
   
  return (
    <Container>
        <h2>Bebidas</h2>
        <div className='snacks'>
            {drinks &&
                    drinks.map(item=>(
                        <Snack key={item.id} snack={item}/>

                    ))
                }
            {!drinks &&
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

export default Drinks

{/* <div key={item}>
                            <Skeleton type='title'/>
                            <Skeleton type='thumbnail'/>
                            <Skeleton type='text'/>
                            <Skeleton type='text'/>
                            <div className='d-flex'>
                                <Skeleton type='title'/>
                                <Skeleton type='image'/>
                            </div>
                        </div> */}