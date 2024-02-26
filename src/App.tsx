import {useEffect, useState} from 'react'

import Header from "./components/Header"

import {Routes, Route} from 'react-router-dom'
import MainPage from "./pages/Main/Main"
import Aside from "./components/Aside"
import Hamburgers from "./pages/Main/Hamburger"
import Pizzas from "./pages/Main/Pizzas"
import Drinks from "./pages/Main/Drinks"
import IceCream from "./pages/Main/IceCream"
import Cart from "./pages/Cart"
import { useStoreData } from './context/storeContext'

import Loading from './assets/loading.gif'
function App() {
  const {storeData}=useStoreData()
  console.log(storeData)

  if(storeData.length<=0){
    return (
      <h1 style={{
        position:'absolute',
        top: '50%',
        left: '40%',
      }}>
        Carregando...
      </h1>
    )
  }
 
  return (
   <>
    <Header/>
    <Routes>
        <Route path='/' element={<MainPage/>}>
          <Route path="/" element={<Hamburgers/>}/>
          <Route path="/pizzas" element={<Pizzas  />}/>
          <Route path="/sorvetes" element={<IceCream />}/>
          <Route path="/bebidas" element={<Drinks/>}/>
        </Route>
        <Route path='/carrinho' element={<Cart/>}/>

      </Routes>

      <Aside/>
   </>
  )
}

export default App
