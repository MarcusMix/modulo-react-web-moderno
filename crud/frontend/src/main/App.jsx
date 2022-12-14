import './App.css'
import React from 'react'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import Routes from './Routes'

import { BrowserRouter } from 'react-router-dom'

export default props =>
    <BrowserRouter>
        <div className='app'>
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>