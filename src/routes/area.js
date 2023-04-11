import React from 'react'
import Header from '../components/header'
import BgArea from "../image/area.jpg"
import Footer from '../components/footer'

export default function Area() {
  return (
    <>
        <Header active="zone"></Header>
        <section className='section-presentation' style={{backgroundImage: `url(`+BgArea+`)`, }}>
		      <div className='h-full flex items-center justify-center'>
		      	<div className="text-center">
              	<h1 className='md:text-8xl text-4xl  text-cyan-300 '>Zone d'intervention</h1>
		      	<h2 className='md:text-4xl text-2xl  text-white'>Transort professionnel dans toute la France</h2>
		      	</div>
		      </div>
	      </section> 
       <Footer></Footer> 
    </>
  )
}
