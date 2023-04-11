import Header from "../components/header";
import bgTruck from "../image/truck.jpg";
import Footer from "../components/footer";
import Road from "../image/road.jpg";
import IconTruck from "../image/icons/truck.png"
import IconCare from "../image/icons/care.png"
import IconPrice from "../image/icons/price.png"
import IconRespect from "../image/icons/respect.png"
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
    <div className="mt-6">
      <div>
        <h2 className="text-center text-3xl font-bold">SOCIÉTÉ DE TRANSPORT PROFESSIONNELLE</h2>
        <p className="text-center font-semibold">Partenaire de confiance pour tous transports de marchandise !</p>
        {/* <div className="grid grid-cols-2">
        <img className="img-right-side " src={Road} alt="route"/>
        </div> */}
      </div>
      <div className="section-blue grid grid-cols-4 flex items-center">
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center"><img alt="icone" src={IconTruck}></img></div>
            <div className="font-bold">Transport Express</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center"><img alt="icone" src={IconCare}></img></div>
            <div className="font-bold">Respect de la marchandise</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center"><img alt="icone" src={IconPrice}></img></div>
            <div className="font-bold">Prix attractifs</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center"><img alt="icone" src={IconRespect}></img></div>
            <div className="font-bold">Respect des normes</div>
          </div>
        </div>

        
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}
