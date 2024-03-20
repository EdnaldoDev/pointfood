import { useEffect, useContext} from "react"
import Skeleton from "../../../components/Skeleton"
import { Container } from "../styles"
import { SnackData } from "../../../types/SnackData"
import Snack from "../../../components/Snack"
import { useLocation} from "react-router-dom"
import { useStoreData } from "../../../context/storeContext"

function ProductList() {
    const {storeData}=useStoreData()
    const location=useLocation()
    const path= location.pathname.slice(1)

  return (
    <Container>
        <h2>{path.charAt(0).toLocaleUpperCase() + path.slice(1).toLocaleLowerCase()}</h2>
        <div className='snacks'>
             {storeData?.cardapio &&
                    storeData?.cardapio[path].map(item=>(
                        <Snack key={item.id} snack={item}/>

                    ))
                }
                {!storeData.cardapio &&
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

export default ProductList
