import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Sub_page } from './Countries_project/Sub_page.jsx'
import { Header } from './Countries_project/Header.jsx'
import { Country } from './Countries_project/Country.jsx'
import CountryContext from './CountryContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CountryContext>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/sub/:id' element={<Sub_page/>} />
    </Routes>
    </BrowserRouter>
    </CountryContext>
  </>
)
