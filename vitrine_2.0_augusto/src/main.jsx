import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import { CarrinhoProvider } from './context/CarrinhoContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CarrinhoProvider>
        <App/>
      </CarrinhoProvider>
    </AuthProvider>
  </BrowserRouter>
)