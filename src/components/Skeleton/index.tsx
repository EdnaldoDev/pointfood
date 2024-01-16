import { Element } from "./styles"


export interface elementProsp{
    type: 'title'| 'text'| 'image'| 'thumbnail'
}
function Skeleton({type}:elementProsp) {
  return <Element type={type}/> 
} 

export default Skeleton