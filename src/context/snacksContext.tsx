import React, {createContext, useEffect, useState}  from 'react'
import { SnackData } from '../types/SnackData'
import { getDrinks, getHamburger, getIcecream, getPizzas } from '../api/Api'


interface SnackContextProps{
    burgers:SnackData[],
    pizzas:SnackData[],
    drinks:SnackData[],
    sorvetes:SnackData[]
  }

export const SnackContext= createContext({} as SnackContextProps)

interface SnackProviderProps{
    children: React.ReactNode;
}
export function SnackProvider({children}:SnackProviderProps){
    const [burgers, setBurgers] =useState<SnackData[]>([])   
    const [pizzas, setPizzas] =useState<SnackData[]>([])   
    const [drinks, setDrinks] =useState<SnackData[]>([])   
    const [sorvetes, setSorvetes] =useState<SnackData[]>([])   
  
  
    useEffect(()=>{
      (async ()=>{  
  
        try{
          const burgersReq= await getHamburger()
          const pizzasReq= await   getPizzas()
          const drinksReq= await getDrinks()
          const sorvetesReq= await getIcecream()
  
          const requests=[  
            burgersReq,pizzasReq,drinksReq,sorvetesReq
          ]
  
          const [burgersData, pizzasData, drinksData, sorvetesData] = await Promise.all(requests)
  
  
         
  
  
          setBurgers(burgersData)
          setPizzas(pizzasData)
          setDrinks(drinksData)
          setSorvetes(sorvetesData)
  
        }catch(err){
          console.log(err)
        }
  
      })()
    },[])
    return(
        <SnackContext.Provider value={{burgers, pizzas, drinks, sorvetes}}>
            {children}
        </SnackContext.Provider>
    )
}
