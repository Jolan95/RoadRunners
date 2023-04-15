import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Form  from '../components/form'
import Iframe from "../components/iframe"
import IconLocalisation from "../image/icons/localisation.png"
import IconTelephone from "../image/icons/tel.png"
import IconMail from "../image/icons/mail.png"


export default function Devis() {
  return (
    <>
        <Header active="devis"></Header>
        <div className=' p-5  sm:p-10'>
            <h1 className='text-2xl font-semibold text-center py-0 mg:py-3'>Contact</h1>
            <div className="lg:grid lg:grid-cols-2 max-w-screen-xl mx-auto mx-7 md:mx-10 xl:mx-auto pb-7 lg:py-7 text-md md:text-lg ">
                <div className='wrapper-form '>
                    <h2 className='text-lg font-semibold'>Demande de contact</h2>
                    <Form>
                    </Form>
                </div>
                <div>
                    <div className='border-2 border-black p-5 mb-5 mt-7 lg:mt-0'>
                        <h1 className='text-center text-xl text-cyan-600 font-semibold'>
                        Road Runners
                        </h1>
                        <div>
                            <div className='flex items-center'>
                                <img src={IconTelephone} alt="icon" className='h-4 w-auto'></img> : 06.34.23.15.43
                            </div>
                            <div className='flex items-center'>
                                <img src={IconMail} alt="icon" className='h-4 w-auto'></img> : RRUNNERS@GMAIL.COM
                            </div>
                            <div className='flex items-center'>
                                <img src={IconLocalisation} alt="icon" className='h-4 w-auto'></img> : 20 RUE ROGER SALENGRO 95270 SAINT-MARTIN-DU-TERTRE
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <Iframe></Iframe>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
  )
}
