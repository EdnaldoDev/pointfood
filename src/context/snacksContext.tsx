import React, {createContext, useContext, useEffect, useState}  from 'react'
import { SnackData } from '../types/SnackData'
import { getDrinks, getHamburger, getIcecream, getPizzas } from '../api/Api'
import { useStoreData } from './storeContext'


interface SnackContextProps{
    cardapio:SnackData[],
    setCardapio:any
    // burgers:SnackData[],
    // pizzas:SnackData[],
    // drinks:SnackData[],
    // sorvetes:SnackData[]
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
            setCardapio(storeData.cardapio)
        }
    },[])
    return(
        <SnackContext.Provider value={{cardapio,setCardapio }}>
            {children}
        </SnackContext.Provider>
    )
}

export const useSnackContext=()=>{
    const context = useContext(SnackContext)

    return context
}