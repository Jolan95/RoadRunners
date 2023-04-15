import React from 'react'
import IconTruck from "../image/icons/truck.webp"
import IconPrice from "../image/icons/price.webp"
import IconRespect from "../image/icons/respect.webp"
import IconTrust from "../image/icons/trust.webp"

export default function Bandeau() {
  return (
    <div className="section-blue sm:py-5 md:py:0 md:h-48 w-auto grid md:grid-cols-4 sm:grid-cols-2 items-center">
    <div className="flex justify-center">
      <div className="circle">
        <div className="flex justify-center"><img alt="icone" src={IconTruck}></img></div>
        <div className="font-bold  hidden md:block text-center">Transport rapide et sécurisé</div>
        <div className="font-semibold lg:font-bold   md:hidden ">Transport Express</div>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="circle">
        <div className="flex justify-center"><img alt="icone" src={IconPrice}></img></div>
        <div className="font-semibold lg:font-bold text-center">Prix attractifs</div>
      </div>
    </div>
    <div className="flex justify-center sm:pt-3 md:pt-0">
      <div className="circle">
        <div className="flex justify-center"><img alt="icone" src={IconTrust}></img></div>
        <div className="font-semibold lg:font-bold text-center">Fiabilité</div>
      </div>
    </div>
    <div className="flex justify-center sm:pt-3 md:pt-0">
      <div className="circle">
        <div className="flex justify-center"><img alt="icone" src={IconRespect}></img></div>
        <div className="font-semibold lg:font-bold text-center">Respect des normes</div>
      </div>
    </div>  
  </div>
  )
}
