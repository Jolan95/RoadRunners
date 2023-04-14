import React from 'react'
import { useState } from 'react'

export default function Form() {
    
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [preference, setPreference] = useState("telephone")
    const [message, setMessage] = useState("")
    const [check, setCheck] = useState(false);
    const [alert, setAlert] = useState({message: "", type : null}) 

    const handleSubmit = (e)=> {
        e.preventDefault()
        if(name && phone && email){
            if(check){
                setAlert({message : "Demande de devis envoyé avec succès", type:"SUCCES"})
            }else {
                setAlert({message : "Veuillez acceptez le traitement de vos informations personnelles", type:"ERROR"})
            }
        } else {
            setAlert({message : "Veuillez renseigner votre nom complet", type:"ERROR"})
        }
        console.log(name)
        console.log(check)
        console.log(preference)
        console.log(message)
    }

  return (
   <div className="wrapper-form">
        <form onSubmit={(e) => {handleSubmit(e)}}> 
            <span className={' block p-2 rounded '+(alert.type === null? "hidden" : (alert.type === "ERROR"? "bg-red-500" : "bg-green-600"))}>{alert.message}</span>
            <div className='mt-2'>   
                <div>Nom*</div>
                <input  className='text-black w-80 h-8 rounded p-2' type="name" required onChange={(e)=> {setName(e.target.value)}} placeholder="Nom complet"></input>
            </div>
            <div className='mt-2'>
                <div>Telephone*</div>
                <input className='text-black w-80 h-8 rounded p-2' type="tel" required onChange={(e)=> {setPhone(e.target.value)}} placeholder="Numéro de téléphone"></input>
            </div>
            <div className='mt-2'>
                <div>Email*</div>
                <input  className='text-black w-80 h-8 rounded p-2' type="email" required onChange={(e)=> {setEmail(e.target.value)}} placeholder="Email"></input>
            </div>
            <div className='mt-2'>
                <div>Message</div>
                <textarea className='text-black  h-40 rounded p-2' type="textarea" onChange={(e)=> {setMessage(e.target.value)}} placeholder="Votre message (facultatif)"></textarea>
            </div>
            <div className='my-2'>
                <div>Je préfère être contacté par :</div>
                <input type="radio" checked onChange={(e)=> {setPreference("telephone")}} name="contact" value="email"/><label className='pl-1'>Telephone</label>
                <input type="radio" className='ml-2'  onChange={(e)=> {setPreference("email")}} name="contact" value="email"/><label className='pl-1'>Email</label>
            </div>
            <div className='my-2 text-sm md:text-md'>
                <input className='mr-1' type="checkbox" onClick={(e)=> {setCheck(!check)}}></input>J'accepte mes données soient traitées par Road Runners et d'être contacté
            </div>
            <button  type='submit' className='rounded text-white bg-slate-600 py-2 px-4'>
                Envoyer
            </button>
        </form>
    </div>
  )
}
