import React from 'react'
import Header from '../components/header'
import BgArea from "../image/area.webp"
import France from "../image/france.webp"
import Footer from '../components/footer'
import { Link } from 'react-router-dom'
import Cartons from "../image/icons/cartons.webp"
import Devis from "../image/icons/devis.webp"
import Truck from "../image/icons/truck.webp"

export default function Area() {
  return (
	<>
		<Header active="zone"></Header>
		<section className='section-presentation' style={{backgroundImage: `url(`+BgArea+`)`, }}>
			  <div className='h-full flex items-center justify-center'>
			  	<div className="text-center">
			  	<h1 className='md:text-8xl text-4xl  text-cyan-500 '>Zone d'intervention</h1>
			  	<h2 className='md:text-4xl text-2xl  text-white'>Transport professionnel dans toute la France</h2>
			  	</div>
			  </div>
		  </section> 
		<div className="lg:grid lg:grid-cols-2 max-w-screen-xl mb-3 md:mb-0 mx-7 mt-14 lg:mx-10 xl:mx-auto">
	  		<div className="  text-md md:text-lg lg:px-7">
	  			<h2 className=" text-xl md:text-2xl  font-bold mb-4">Transport dans toute la France</h2>
				<p> 
					Fort d'une grande connaissance du réseau routier Francilien et Picard, nos Runners garantissent une fiabilité sans faille et une optimisation de vos transport en <strong>Ile de France</strong> et en <strong>Picardie</strong>.
				</p>
				<h3 className='font-semibold text-lg md:text-xl mt-2'>
				  	Transport express et réguliers
				</h3>
				<p className=''> 
					Pour vos transports réguliers et express, vous pouvez nos confier vos courses en toute confiance et ce dans toute la <span className='font-semibold'>France</span>.
				</p>
		  		<h3 className='font-semibold text-lg md:text-xl mt-2'>
		  		Déménagements
		  		</h3>
				<p className=''> 
				  	Nous proposons d'effectuer vos déménagements dans toute la région <span className='font-semibold'><strong>Ile de France</strong></span> ou <span className='font-semibold'><strong>Picardie</strong></span> avec nos équipes de <strong>déménageurs</strong> professionnels
				</p>
				<div className='mt-5'>
					Pour tout besoin de transports, effectuez une demande de devis, les devis sont réalisés après prise de contact afin de cerner au mieux vos besoins. Devis gratuit et rapide.
				</div>
				<div className="flex my-9">
					<div className="wrapper">
  						<div className="link_wrapper">
  						  	<Link to="/devis">Demande de Devis</Link>
  						  	<div className="icon">
  						  	  	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
  						  	  	  	<path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
  						  	  	</svg>
  						  	</div>
  						</div>
					</div>
				</div>
			</div>
		  	<div className="hidden lg:flex items-center  xl:px-7">
				<img className="" src={France} alt="france"></img>
		  	</div>
		</div>
		<div className="section-blue sm:py-5 md:py:0 md:h-48 w-auto grid md:grid-cols-4 sm:grid-cols-2 items-center">
	<div className="flex justify-center">
	  	<div className="circle">
			<div className="flex justify-center"><img alt="icone" src={Truck}></img></div>
			<div className="font-semibold lg:font-bold hidden md:block text-center">Transport rapide et sécurisé</div>
			<div className="font-semibold lg:font-bold  md:hidden ">Transport Express</div>
	  	</div>
	</div>
	<div className="flex justify-center">
	  	<div className="circle">
			<div className="flex justify-center"><img alt="icone" src={France}></img></div>
			<div className="font-semibold lg:font-bold text-center">Transport dans toute la France</div>
	  	</div>
	</div>
	<div className="flex justify-center sm:pt-3 md:pt-0">
	  	<div className="circle">
			<div className="flex justify-center"><img alt="icone" src={Cartons}></img></div>
			<div className="font-semibold lg:font-bold text-center">Déménagement Ile de France et Picardie</div>
	  	</div>
	</div>  
	<div className="flex justify-center sm:pt-3 md:pt-0">
	  	<div className="circle">
	  		<div className="flex justify-center"><img alt="icone" src={Devis}></img></div>
				 <div className="font-semibold lg:font-bold text-center">Devis rapide et gratuit</div>
	  		</div>
		</div>
  	</div>
	<Footer></Footer> 
	</>
  )
}
