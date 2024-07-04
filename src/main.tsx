import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Trabalho/index.tsx'
import './styles/GlobalStyle.ts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle.ts'
import Estudo from './pages/Estudo/index.tsx'
import Treino from './pages/Treino/index.tsx'
import NavBar from './components/Navbar/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='estudos' element={<Estudo />} />
        <Route path='rotina' element={<Treino />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
