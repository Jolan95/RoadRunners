import React from 'react'
import Header from '../components/header'
import BgDemenagement from "../image/carton.webp"
import Footer from '../components/footer'
import { Link } from 'react-router-dom'
import Carton from "../image/demenagement-carton.webp"

export default function Demenagement() {
  return (
    <>
        <Header active="demenagement"></Header>
        <section className='section-presentation' style={{backgroundImage: `url(`+BgDemenagement+`)`, }}>
		      <div className='h-full flex items-center justify-center'>
		      	<div className="text-center">
              	<h1 className='md:text-8xl text-4xl text-cyan-500 '>Déménagement </h1>
		      	    <h2 className='md:text-4xl text-2xl text-white'>La clé d'un déménagement réussi</h2>
		      	</div>
		      </div>
	      </section> 
        <div className="lg:grid lg:grid-cols-2 max-w-screen-xl mb-3 md:mb-9 mx-7 mt-14 md:mx-10 xl:mx-auto ">
	  	<div className=" text-md md:text-lg mx-3 flex items-center">
			<div>
	  			<h2 className=" text-xl md:text-2xl  font-bold mb-4">Déménagement professionnel</h2>
	  			{/* <p className="text-center font-bold">Partenaire de confiance pour tous transports de marchandise !</p> */}
				<p> 
				  	Road Runners vous accompagne pour vos déménagements dans toute la région <strong>Ile de France</strong> et <strong>Picardie</strong> à l'aide de ses <strong>déménageurs</strong> professionels.
				</p>
				<p className="my-2">Nous vous permettons de déménager sans stress en s'occupant du transport en toute sécurité de vos biens.
				Nos déménageurs professionnels vous garantissent un service de qualité avec le chargement précautionneux de vos affaires jusqu'au déchargement à votre nouveau domicile.
				</p>
				<p>Besoin d'une service de déménagement de qualité avec des camions récents et des déménageurs professionnels ? Contactez nous, devis gratuit et rapide !</p>
				<div className="flex  mt-5">
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
	  	</div>
	  	<div className="hidden lg:flex mx-4 items-center">
			  <img className="image-reverse" src={Carton} alt="mercedes"></img>
	  	</div>
	</div>
	<Footer></Footer> 
    </>
  )
}
