import React from 'react'
import Header from '../components/header'
import BgChargement from '../image/chargement.webp'
import Footer from '../components/footer'
import Camion from "../image/camion-route.webp"
import Camion2 from "../image/camion2.webp"
import { Link } from 'react-router-dom'
import Bandeau from '../components/bandeau'
import AlertDangerous from '../components/alert-dangerous'

export default function Transport() {
  return (
    <>
        <Header active="transport"></Header>
        <section className='section-presentation' style={{backgroundImage: `url(`+Camion+`)`, }}>
		    <div className='h-full flex items-center justify-center'>
		      	<div className="text-center">
              	    <h1 className='md:text-8xl text-4xl text-cyan-500 '>TRANSPORT</h1>
		      	    <h2 className='md:text-4xl text-2xl text-white'>Expert du transport</h2>
		      	</div>
		    </div>
        </section>
        <div className="lg:grid lg:grid-cols-2 max-w-screen-xl mb-3 md:mb-0 mx-7 mt-14 lg:mx-10 xl:mx-auto">
	  	    <div className="  text-md md:text-lg lg:px-7">
	  	    	<h2 className=" text-xl md:text-2xl  font-bold mb-4">TRANSPORT REGULIER</h2>
	  	    	{/* <p className="text-center font-bold">Partenaire de confiance pour tous transports de marchandise !</p> */}
		    	<p> 
                    Besoin de programmer des transports de marchandises de manière journalière, hebdomadaire ou mensuelle? Afin de gagner en sérénité, confiez à Road Runners la réalisation de ces transport en toute sécurité et fiabilité !   
		    	</p>
		    	<p className='mt-2'> 
		    	  	Road Runners assure vos courses régulières, vous pouvez planifier la réalisation de vos transports qui seront réalisés par des Runners compétents qui prendront en charge vos marchandises à l'heure et la date définit.
		    	</p>
		    	<p className='mt-2'> 
		    	  	Road Runners assure un service de qualité à ses collaborateurs en garantissant l'optimisation de la gestion de leurs transports dans toute la France !
		    	</p>
	  	    </div>
	      	<div className="hidden lg:flex items-center  xl:px-7">
	    		<img className="image-reverse" src={BgChargement} alt="mercedes"></img>
	      	</div>
	    </div>
        <div className='bg-slate-800 text-center text-white px-4 py-7 mt-10 text-md md:text-lg'>
            Vous avez besoin d'un transport de qualité ? Effectuez un devis ou demandez une prise de contact
            <div className="flex justify-center mt-3">
                <Link to="/devis"><button class="button-devis text-lg">Demande de devis</button></Link>
            </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 max-w-screen-xl mb-3 md:mb-0 mx-7 mt-14 lg:mx-10 xl:mx-auto pb-14 ">
	      	<div className="hidden lg:flex items-center xl:px-7">
	    		<img className="image-reverse " src={Camion2} alt="mercedes"></img>
	      	</div>
            <div className='flex items-center'>
	  	        <div className="  text-md md:text-lg lg:px-7">
	  	        	<h2 className=" text-xl md:text-2xl  font-bold mb-4">TRANSPORT EXPRESS</h2>
		        	<p> 
                        Besoin d'un transport urgent et sécurisé de marchandise ? Vous êtes professionnel ou particulier? Nos runners répondent à la prise en charge et à l'achemnement express de vos marchandise. 
		        	</p>
		        	<p className='mt-2'> 
		        	  	Pour un besoin de dernière minute, vous pouvez compter sur Road Express afin d'opérer un transport de qualité, rapide et sécure, en béneficiant de la même qualité logistique qu'un transport programmé.
		        	</p>
		        	<p className='mt-2'> 
		        	  	Road Runners certifie un service de qualité à ses collaborateurs en garantissant l'optimisation de la gestion de leurs transports express dans toute la France !
		        	</p>
	  	        </div>
            </div>
	    </div>
        <div className='px-4'>
        <AlertDangerous></AlertDangerous>
        </div>
        <Bandeau></Bandeau>  
        <Footer></Footer>  
    </>
  )
}
