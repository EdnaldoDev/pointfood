
import React,{createContext, useState} from 'react'
import { SnackData } from '../types/SnackData'
import { CartData } from '../types/cartItems';

interface CartContextProps{
    addToCart(item:Omit<CartData,'id'>):void;
    removeFromCart(id:string):void;
    cartItems:CartData[];
    setCartItems:any
}

export const CartContext=createContext({}as CartContextProps)


interface CartProviderProps{
    children:React.ReactNode
}

export function CartProvider({children}:CartProviderProps){

    const [cartItems, setCartItems] = useState<CartData[]>([])

    const addToCart=(item:CartData)=>{

        // VERIFY IF EXIST THE SAME ITEM INTO THE CART
        const isItemInTheCart=cartItems.some((cartItem)=>cartItem.
        id=== item.id && item.name === cartItem.name)
       

        if(!isItemInTheCart){
            const newItems=[...cartItems, {...item, quantity:1, subtotal:item.price*1}]
            setCartItems(newItems)
            alert('Item adiconado ao carrinho')
        }else{
            const newItems=cartItems.map((cartItem)=>{
                if(cartItem.id=== item.id && item.name === cartItem.name){
                    cartItem.quantity+=1
                    cartItem.subtotal= cartItem.quantity * cartItem.price
                }
                return cartItem
            })

            setCartItems(newItems)
            alert('Quantidade atualizada!')

        }
        

       

        
        
    }

   const  removeFromCart=(id:any)=>{
    const newItems= cartItems.filter((value,index,self)=>value.id !== id)
    setCartItems(newItems)
   }

    return(
        <CartContext.Provider value={{addToCart, removeFromCart, cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}