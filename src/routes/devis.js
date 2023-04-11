import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Devis() {
  return (
    <>
        <Header active="devis"></Header>
          <h1>Demande de devis</h1>
        <div className='wrapper-form'>
          <form>
            Demande de contact
          </form>
          
        </div>
        <Footer></Footer>
    </>
  )
}
