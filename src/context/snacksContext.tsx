import React, {createContext, useEffect, useState}  from 'react'
import { SnackData } from '../types/SnackData'
import { getDrinks, getHamburger, getIcecream, getPizzas } from '../api/Api'
import { useStoreData } from './storeContext'


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
    const {storeData}=useStoreData()
    const [cardapio, setCardapio]=useState([])
    
    useEffect(()=>{
        if(storeData?.cardapio){
                console.log(cardapio)
        setCardapio(storeData.cardapio)
        }
    },[])
    return(
        <SnackContext.Provider value={{
            burgers:cardapio.burgers,
            pizzas: cardapio.pizzas,
            drinks: cardapio.drinks,
            sorvetes: cardapio.sorvetes
         }}>
            {children}
        </SnackContext.Provider>
    )
}
