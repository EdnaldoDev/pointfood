import React, {createContext, useContext, useEffect, useState}  from 'react'
import io from 'socket.io-client'
import { toast } from 'react-toastify';
// import { SnackData } from '../types/SnackData'


interface StoreDataContextProps{
    storeData:any[],
    socket:any,
    joinRoom:()=>void
  }

export const StoreContext= createContext({} as StoreDataContextProps)

interface StoreProviderProps{
    children: React.ReactNode;
}





export function StoreProvider({children}:StoreProviderProps){
   const [storeData, setStoreData]=useState<any[]>([])
   const socket= io('http://localhost:3001')

   const joinRoom=(id)=>{
    socket.emit('connected', id);
  }

    useEffect(()=>{
      (async ()=>{  
        try{
          const req= await fetch(`${import.meta.env.VITE_BASE_URL}app/products`, {
            method:'get',
            headers:{
              'Authorization':`Bearer ${import.meta.env.VITE_STORE_TOKEN}`,
              "Access-Control-Allow-Origin":"*"
            }
          })
          const data= await req.json()
          setStoreData(data)
        }catch(err){
          alert(err)
        }
      })()
    },[])

    socket.on('confirmOrder', (confirmation) => {
      toast.info('Pedido confirmado, voce sera informado pelo whatsapp')
       // Update the UI with the confirmation details
     })

    socket.on('orderStatusChanged', (data)=>{
      console.log(data)
      toast.info('O status do seu pedido foi alterado para: ' + data.progress )
    })

    return(
        <StoreContext.Provider value={{storeData, socket, 
          joinRoom}}>
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