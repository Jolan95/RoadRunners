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
        if(!name ){
            if(!phone && !email){
                setAlert({message : "Veuillez renseigner un numéro de téléphone ou/et une adresse mail", type:"ERROR"})
                return false
            }
            if(!phone && preference === "telephone"){
                setAlert({message : "Veuillez renseigner votre numéro de téléphone ou modifiez vos préférences de prise de contact", type:"ERROR"})
            }
            if(!phone && preference === "telephone"){
                setAlert({message : "Veuillez renseigner votre numéro de téléphone ou modifiez vos préférences de prise de contact", type:"ERROR"})
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
            <div>   
                <div>Nom</div>
                <input  className='text-black w-80 h-8 rounded' type="name" required onChange={(e)=> {setName(e.target.value)}} placeholder="Nom complet"></input>
            </div>
            <div>
                <div>Telephone</div>
                <input className='text-black w-80 h-8 rounded' type="tel" required onChange={(e)=> {setPhone(e.target.value)}} placeholder="Numéro de téléphone"></input>
            </div>
            <div>
                <div>Email</div>
                <input  className='text-black w-80 h-8 rounded' type="email" required onChange={(e)=> {setEmail(e.target.value)}} placeholder="Email"></input>
            </div>
            <div className='mb-3'>
                <div>Je préfère être contacté par :</div>
                <input type="radio" checked onChange={(e)=> {setPreference("telephone")}} name="contact" value="email"/><label>Telephone</label>
                <input type="radio" onChange={(e)=> {setPreference("email")}} name="contact" value="email"/><label>Email</label>
            </div>
            <div>
                <textarea className='text-black w-80 h-80 rounded' type="textarea" onChange={(e)=> {setMessage(e.target.value)}} placeholder="Votre message"></textarea>
            </div>
            <div>
                <input type="checkbox" onClick={(e)=> {setCheck(!check)}}></input>J'accepte mes données soient traitées par Road Runners et d'être contacté
            </div>
            <button type='submit' className='rounded bg-slate-600 py-4 px-4'>
                Envoyer
            </button>
        </form>
    </div>
  )
}
