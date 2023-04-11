import React from 'react'
import Header from '../components/header'
import BgDemenagement from "../image/carton.jpg"
import Footer from '../components/footer'

export default function Demenagement() {
  return (
    <>
        <Header active="demenagement"></Header>
        <section className='section-presentation' style={{backgroundImage: `url(`+BgDemenagement+`)`, }}>
		      <div className='h-full flex items-center justify-center'>
		      	<div className="text-center">
              	<h1 className='md:text-8xl text-4xl text-cyan-300 '>ROAD RUNNERS</h1>
		      	<h2 className='md:text-4xl text-2xl text-white'>La clé d'un transport réussi</h2>
		      	</div>
		      </div>
	      </section> 
        <Footer></Footer> 
    </>
  )
}
