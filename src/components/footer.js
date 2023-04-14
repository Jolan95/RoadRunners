import React from 'react'
import Route from "../image/routes.jpg"

export default function Footer() {
  return (
<footer className="background-footer " style={{backgroundImage: `url(`+Route+`)`, }}>
    <div className=" text-center text-white">
        <div className="pt-6">
          <div className="mb-6 text-5xl flex justify-center">
              rrunners@gmail.com
          </div>
          <div className="mb-6 text-3xl flex justify-center">
              06.34.23.27.10
          </div>
        </div>
        <div
          className="p-4 text-sm text-center">
         Plan du site | Mentions légales 
        </div>
    </div>
</footer>
  )
}
