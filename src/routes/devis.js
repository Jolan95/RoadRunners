import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Form  from '../components/form'

export default function Devis() {
  return (
    <>
        <Header active="devis"></Header>
        <div className='px-5  sm:p-20'>
            <h1 className='text-2xl font-semibold'>Demande de contact</h1>
            <div className='wrapper-form'>
                <Form>
                </Form>
            </div>
        </div>
        
        <Footer></Footer>
    </>
  )
}
