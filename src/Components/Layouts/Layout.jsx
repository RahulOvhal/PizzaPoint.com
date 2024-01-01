// This Will be Wraper Components for Header and Footer. 

import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
        <div>{children}</div>
      <Footer/>
    </>
  )
}

export default Layout
