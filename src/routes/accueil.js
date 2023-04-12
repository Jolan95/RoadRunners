import Header from "../components/header";
import bgTruck from "../image/truck.jpg";
import Footer from "../components/footer";
import truckMercedes from "../image/mercedes-blanc.png"
import IconTruck from "../image/icons/truck.png"
import IconCare from "../image/icons/care.png"
import IconPrice from "../image/icons/price.png"
import IconRespect from "../image/icons/respect.png"
import IconTrust from "../image/icons/trust.png"
import AlertDangerous from "../components/alert-dangerous";
import { Link } from "react-router-dom";


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
	  	<h2 className="text-center text-3xl font-semibold mb-4">SOCIÉTÉ PROFESSIONNEL DE TRANSPORT </h2>
	  	{/* <p className="text-center font-bold">Partenaire de confiance pour tous transports de marchandise !</p> */}
			<p className="text-center"> 
			  	Road Runners, votre partenaire confiance coordonne vos opérations de transports routiers express et réguliers dans toute la région <strong>Ile de France</strong> et <strong>Picardie</strong> effectués par ses <strong>Runners</strong> en toute fiabilité.<br/>
			</p>
			<h3 className="mt-4 mb-1  font-bold">Transport régulier</h3>
			Road Runner répond à vos besoins de livraisons régulières et programmés.
			Optez pour la sérénité en confiant vos livraisons de marchandises régulières dans des véhicules spécialement dédiés à votre transport.
			<h3 className="mt-4 mb-1 font-bold">Transport express</h3>
			Nos Runners assure en toute sécurité et rapidité vos courses à la demande, pour des besoins express dans toute la France.
			<div className="flex justify-center mt-5 ">
			<div class="wrapper">
  				<div class="link_wrapper">
  				  <Link to="/devis">Demande de Devis</Link>
  				  <div class="icon">
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
	  <div className="section-blue mt-10 md:h-48 w-auto grid md:grid-cols-4 sm:grid-cols-2 items-center">
		<div className="flex justify-center">
		  <div className="circle">
			<div className="flex justify-center"><img alt="icone" src={IconTruck}></img></div>
			<div className="font-bold none hidden md:block ">Transport rapide et sécurisé</div>
			<div className="font-bold none  md:hidden ">Transport Express</div>
		  </div>
		</div>
		<div className="flex justify-center">
		  <div className="circle">
			<div className="flex justify-center"><img alt="icone" src={IconPrice}></img></div>
			<div className="font-bold">Prix attractifs</div>
		  </div>
		</div>
		<div className="flex justify-center">
		  <div className="circle">
			<div className="flex justify-center"><img alt="icone" src={IconTrust}></img></div>
			<div className="font-bold text-center">Fiabilité</div>
		  </div>
		</div>
		<div className="flex justify-center">
		  <div className="circle">
			<div className="flex justify-center"><img alt="icone" src={IconRespect}></img></div>
			<div className="font-bold">Respect des normes</div>
		  </div>
		</div>  
	  </div>
	<Footer></Footer>
	</>
  )
}
