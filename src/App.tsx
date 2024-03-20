import {useEffect, useState} from 'react'

import Header from "./components/Header"

import {Routes, Route} from 'react-router-dom'
import MainPage from "./pages/Main/Main"
import Aside from "./components/Aside"
import Cart from "./pages/Cart"
import { useStoreData } from './context/storeContext'
import ProductList from './pages/Main/productList'

function App() {
  const {storeData}=useStoreData()

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

  document.title=storeData?.nome + " | Seu cardapio digital"
 
  return (
   <>
    <Header/>
    <Routes>
        <Route path='/' element={<MainPage/>}>
          <Route path="/:category" element={<ProductList/>}/>
        </Route>
        <Route path='/carrinho' element={<Cart/>}/>

      </Routes>

      <Aside/>
   </>
  )
}

export default App
