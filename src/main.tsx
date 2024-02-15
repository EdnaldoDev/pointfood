import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Theme } from './styles/theme.tsx'
import { GlobalStyle } from './styles/global.ts'
import {BrowserRouter} from 'react-router-dom'

import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import { SnackProvider } from './context/snacksContext.tsx'
import { CartProvider } from './context/cartContext.tsx'

import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { StoreProvider } from './context/storeContext.tsx'

const queryClient= new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
      <BrowserRouter>
          <Theme>
            <QueryClientProvider client={queryClient}>
              
              <StoreProvider>
                <CartProvider>
                  <App/>
                  <ToastContainer/>
                </CartProvider>
              </StoreProvider>
            </QueryClientProvider>
            <GlobalStyle/>
          </Theme>
      </BrowserRouter>
  </React.StrictMode>,
)
