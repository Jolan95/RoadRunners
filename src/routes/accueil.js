import Header from "../components/header";
import bgTruck from "../image/truck.webp";
import truckMercedes from "../image/mercedes-blanc.webp";
import Bandeau from "../components/bandeau.js";
import AlertDangerous from "../components/alert-dangerous";
import Route from '../image/routes.webp'
import Map from "../image/map.webp"
import { Link } from "react-router-dom";
import Demenagement from "../image/demenageurs.webp"
import Form from "../components/form"


export default function Accueil() {
  return (
	<>
	<Header active="accueil"></Header>
	<section className='section-presentation' style={{backgroundImage: `url(`+bgTruck+`)`, }}>
		<div className='h-full flex items-center justify-center'>
			<div className="text-center">
				<h1 className='md:text-8xl text-4xl text-cyan-500'>ROAD RUNNERS</h1>
				<h2 className='md:text-4xl text-2xl  text-white'>La clé d'un transport réussi</h2>
			</div>
		</div>
	</section> 
	<div className="lg:grid lg:grid-cols-2 max-w-screen-xl mb-3 md:mb-0 mx-7 mt-14 md:mx-10 xl:mx-auto">
	  	<div className=" md:text-center text-md md:text-lg">
	  		<h2 className=" text-xl md:text-2xl  font-bold mb-4">SOCIÉTÉ PROFESSIONNELLE DE TRANSPORT </h2>
	  		{/* <p className="text-center font-bold">Partenaire de confiance pour tous transports de marchandise !</p> */}
			<p className=""> 
			  	Road Runners, votre partenaire confiance coordonne vos opérations de transports routiers express et réguliers dans toute la région <strong>Ile de France</strong> et <strong>Picardie</strong> effectués par ses <strong>Runners</strong> en toute fiabilité.<br/>
			</p>
			<h3 className="mt-4 mb-1  font-semibold text-lg md:text-xl">Transport Régulier</h3>
			Road Runner répond à vos besoins de livraisons régulières et programmés.
			Optez pour la sérénité en confiant vos livraisons de marchandises régulières dans des véhicules spécialement dédiés à vos transport.
			<h3 className="mt-4 mb-1 font-semibold text-lg md:text-xl">Transport Express</h3>
			Nos Runners assure en toute sécurité et rapidité vos courses à la demande, pour des besoins express dans toute la France.
			<div className="flex md:justify-center mt-5">
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
	  	<div className="hidden lg:block">
			<img className="image-reverse" src={truckMercedes} alt="mercedes"></img>
	  	</div>
	</div>
	<div className="pt-5 mx-6">
	<AlertDangerous></AlertDangerous>
	</div>  
	<Bandeau></Bandeau>
	<div className="bg-white mt-6 md:mt-0">
		<div className="lg:grid lg:grid-cols-2 max-w-screen-xl mx-auto mx-7 py-7 lg:py-14  md:mx-10 xl:mx-auto mb-8 text-md md:text-lg">
			<div className="hidden lg:flex justify-center items-center">
				<img className="h-auto xl:w-9/12 lg:w-11/12" src={Map} alt="map"></img>
			</div>
			<div className="md:flex md:items-center mx-4">
				<div className="md:text-center lg:text-left">
					<h2 className=" font-bold mb-4  text-xl md:text-2xl">SECTEUR D'ACTIVITÉ</h2>
					<div className=""> 
						<h3 className="mt-4 mb-1 font-semibold text-lg md:text-xl ">Ile de France et Picardie</h3>
						Basé en Ile de France, 
				  		Road Runners est spécialisé dans le transport routier sur la région Ile de France et Picardie. Vous pouvez nous y confier vos courses régulières, vos courses Express ou même vos déménagements.<br/>
						<h3 className="mt-4 mb-1 font-semibold text-lg md:text-xl">Transport National</h3>
						Besoin d'un transport de marchandise vers lRoad Runners assure vos courses Express ou régulières dans toutes l'héxagone.
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="lg:grid lg:grid-cols-2 max-w-screen-xl mx-auto mx-7 md:mx-10 xl:mx-auto pb-7 lg:py-14 text-md md:text-lg ">
	  	<div className=" mx-4">
	  		<h2 className="  font-bold mb-4 text-xl md:text-2xl">DEMENAGEMENT</h2>
			<p className=" md:text-xl"> 
				Road Runners et ses équipes de déménageurs vous propose un service de déménagement de qualité dans toute la région Ile de France et Picardie. <br/>Vous pouvez nous confier l'acheminement de vos biens. Nos équipes experts de déménageurs s'occupent du chargement et du déchargement en toute sécurité de vos biens que nos Runners acheminent jusqu'à votre nouveau domicile.<br/>
			</p>
			<div className="flex mt-8">
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
	 	<div className="hidden lg:flex justify-center items-end xl:items-center ">
			<img className="image-med h-auto xl:w-9/12 lg:w-11/12" src={Demenagement} alt="demenagement"></img>
	 	</div>
	</div>
	<div className="background-footer filter-opacity" style={{backgroundImage: `url(`+Route+`)`, }}>
		<div className="text-white">
			<h2 className="text-center font-bold pt-7 text-xl md:text-2xl">DEMANDE DE CONTACT</h2>
	  		<div className="lg:grid text-white lg:grid-cols-2 max-w-screen-xl mx-4 md:mx-7  md:mx-10 xl:mx-auto pb-10 pt-10">
				<div className="flex justify-center lg:justify-start">
					<Form></Form>
	  			</div>
				<div className="hidden lg:flex justify-center">
				<iframe className="hidden lg:block" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d518509.0407599505!2d2.0907307491785154!3d48.97600739962165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6447cebb370cd%3A0x7275346b36790558!2s24%20Rue%20Roger%20Salengro%2C%2095270%20Saint-Martin-du-Tertre!5e0!3m2!1sfr!2sfr!4v1681316990363!5m2!1sfr!2sfr" width="450" height="450" allowFullScreen="" title="localisation" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>	
				</div>
	  		</div>
			<footer>
    			<div className=" text-center text-white">
    			    <div className="px-6 pt-6">
    			      <div className="mb-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl  flex justify-center">
    			          rrunners@gmail.com
    			      </div>
    			      <div className="mb-4 text-lg text-2xl  lg:text-3xl flex justify-center">
    			          06.34.23.27.10
    			      </div>
    			    </div>
    			    <div
    			      className="p-4 text-sm text-center">
    			      Mentions légales
    			    </div>
    			</div>
   			</footer>
		</div>
	</div>
	</>
  )
}
