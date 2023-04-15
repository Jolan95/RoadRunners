import React from 'react'
import Route from "../image/routes.webp"

export default function Footer() {
  return (
<footer className="background-footer " style={{backgroundImage: `url(`+Route+`)`, }}>
    <div className=" text-center text-white">
        <div className="px-6 pt-6">
          <div className="mb-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl  flex justify-center">
              rrunners@gmail.com
          </div>
          <div className="mb-4 text-lg text-2xl  lg:text-3xl flex justify-center">
              06.68.58.43.76
          </div>
        </div>
        <div
          className="p-4 text-sm text-center">
          Mentions légales
        </div>
    </div>
</footer>
  )
}
