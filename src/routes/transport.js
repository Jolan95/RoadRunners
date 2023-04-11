import React from 'react'
import Header from '../components/header'
import BgChargement from '../image/chargement.jpg'
import Footer from '../components/footer'

export default function Transport() {
  return (
    <>
        <Header active="transport"></Header>
        <section className='section-presentation' style={{backgroundImage: `url(`+BgChargement+`)`, }}>
		      <div className='h-full flex items-center justify-center'>
		      	<div className="text-center">
              	<h1 className='md:text-8xl text-4xl text-cyan-300 '>TRANSPORT</h1>
		      	<h2 className='md:text-4xl text-2xl text-white'>Expert du transport</h2>
		      	</div>
		      </div>
	      </section>
        <Footer></Footer>  
    </>
  )
}
