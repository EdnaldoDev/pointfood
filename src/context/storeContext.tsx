import React, {createContext, useContext, useEffect, useState}  from 'react'
import { SnackData } from '../types/SnackData';
// import { SnackData } from '../types/SnackData'


interface StoreDataContextProps{
    storeData:any[],
  }

export const StoreContext= createContext({} as StoreDataContextProps)

interface StoreProviderProps{
    children: React.ReactNode;
}
export function StoreProvider({children}:StoreProviderProps){
   const [storeData, setStoreData]=useState<any[]>([])
  
  
    useEffect(()=>{
      (async ()=>{  
  
        try{
         const req= await fetch('http://localhost:3001/app/products', {
            method:'get',
            headers:{'Authorization':'Bearer gordin.2024@_end'}
          })
         const {restaurante} = await req.json()
          console.log(restaurante)

          setStoreData(restaurante)
         
  
        }catch(err){
          alert(err)
        }
  
      })()
    },[])
    return(
        <StoreContext.Provider value={{storeData}}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStoreData=()=>{
    const context = useContext(StoreContext)

    if(!context){
        console.log('No storeData context')
    }

    return context
}