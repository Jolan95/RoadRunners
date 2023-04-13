import Header from "../components/header";
import bgTruck from "../image/truck.jpg";
import Footer from "../components/footer";
import truckMercedes from "../image/mercedes-blanc.png";
import Bandeau from "../components/bandeau.js";
import AlertDangerous from "../components/alert-dangerous";
import Route from '../image/routes.jpg'
import Map from "../image/map.jpg"
import { Link } from "react-router-dom";
import Demenagement from "../image/demenageurs.jpeg"
import Form from "../components/form"


export default function Accueil() {
  return (
	<>
	<Header active="accueil"></Header>
	<section className='section-presentation' style={{backgroundImage: `url(`+bgTruck+`)`, }}>
		<div className='h-full flex items-center justify-center'>
			<div className="text-center">
				<h1 className='md:text-8xl text-4xl text-cyan-300'>ROAD RUNNERS</h1>
				<h2 className='md:text-4xl text-2xl  text-white'>La clé d'un transport réussi</h2>
			</div>
		</div>
	</section> 
	<div className="lg:grid lg:grid-cols-2 max-w-screen-xl mx-auto mx-7 mt-14 md:mx-10 xl:mx-auto">
	  	<div className=" text-lg text-center">
	  		<h2 className="text-center text-3xl font-semibold mb-4">SOCIÉTÉ PROFESSIONNELLE DE TRANSPORT </h2>
	  		{/* <p className="text-center font-bold">Partenaire de confiance pour tous transports de marchandise !</p> */}
			<p className="text-center"> 
			  	Road Runners, votre partenaire confiance coordonne vos opérations de transports routiers express et réguliers dans toute la région <strong>Ile de France</strong> et <strong>Picardie</strong> effectués par ses <strong>Runners</strong> en toute fiabilité.<br/>
			</p>
			<h3 className="mt-4 mb-1  font-bold">Transport Régulier</h3>
			Road Runner répond à vos besoins de livraisons régulières et programmés.
			Optez pour la sérénité en confiant vos livraisons de marchandises régulières dans des véhicules spécialement dédiés à votre transport.
			<h3 className="mt-4 mb-1 font-bold">Transport Express</h3>
			Nos Runners assure en toute sécurité et rapidité vos courses à la demande, pour des besoins express dans toute la France.
			<div className="flex justify-center mt-5 ">
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
	  <AlertDangerous></AlertDangerous>
	  <Bandeau></Bandeau>
	  <div className="lg:grid lg:grid-cols-2 max-w-screen-xl mx-auto mx-7 mt-14 md:mx-10 xl:mx-auto mb-8">
	  	<div className="hidden lg:flex justify-center items-center">
			<img className="image-med" src={Map} alt="map"></img>
	  	</div>
		<div className="md:flex md:items-center">
	  		<div className="text-lg text-center">
	  			<h2 className="text-center text-3xl font-semibold mb-4 lg:text-left">SECTEUR D'ACTIVIÉ</h2>
				<div className="text-center lg:text-left"> 
				<h3 className="mt-4 mb-1 font-bold ">Ile de France et Picardie</h3>
					Basé en Ile de France, 
				  	Road Runners est spécialisé dans le transport routier sur la région Ile de France et Picardie. Vous pouvez nous y confier vos courses régulières, vos courses Express ou même vos déménagements.<br/>
				<h3 className="mt-4 mb-1 font-bold">Transport National</h3>
				Besoin d'un transport de marchandise vers lRoad Runners assure vos courses Express ou régulières dans toutes l'héxagone.
				</div>
	  		</div>
		</div>
	</div>
	{/* <div className="h-3 section-blue w-full"> */}
	{/* </div>	 */}
	<div className="bg-white">
	  <div className="lg:grid lg:grid-cols-2 max-w-screen-xl mx-auto mx-7 mt-14 md:mx-10 xl:mx-auto py-20">
	  	<div className=" text-lg text-center">
	  		<h2 className="text-center text-3xl font-semibold mb-4 md:text-left">DEMENAGEMENT</h2>
			<p className="text-center lg:text-left"> 
				Road Runners et ses équipes de déménageurs vous propose un service de déménagement de qualité dans toute la région Ile de France et Picardie. <br/>Vous pouvez nous confier l'acheminement de vos biens. Nos équipes experts de déménageurs s'occupent du chargement et du déchargement en toute sécurité de vos biens que nos Runners acheminent jusqu'à votre nouveau domicile.<br/>
			</p>
			<div className="flex justify-center mt-8 lg:justify-start ">
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
	  	<div className="hidden lg:flex justify-center items-center">
			<img className="image-med" src={Demenagement} alt="demenagement"></img>
	  	</div>
	</div>
	</div>  

	<div className="background-footer filter-opacity" style={{backgroundImage: `url(`+Route+`)`, }}>
		<div className="text-white">
			<h2 className="text-center text-3xl font-semibold pt-10">Demande de contact</h2>
	  		<div className="lg:grid text-white lg:grid-cols-2 max-w-screen-xl mx-auto mx-7  md:mx-10 xl:mx-auto py-20">
				<div className="">
					<Form></Form>
	  			</div>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d518509.0407599505!2d2.0907307491785154!3d48.97600739962165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6447cebb370cd%3A0x7275346b36790558!2s24%20Rue%20Roger%20Salengro%2C%2095270%20Saint-Martin-du-Tertre!5e0!3m2!1sfr!2sfr!4v1681316990363!5m2!1sfr!2sfr" width="600" height="450" allowFullScreen="" title="localisation" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>	
	  		</div>
			<footer>
    			<div className=" text-center text-white">
    			    <div className="container px-6 pt-6">
    			      <div className="mb-6 text-5xl flex justify-center">
    			          rrunners@gmail.com
    			      </div>
    			      <div className="mb-6 text-3xl flex justify-center">
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
