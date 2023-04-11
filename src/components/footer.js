import React from 'react'
import CamionMerco from "../image/mercedes1.jpg"

export default function Footer() {
  return (
<footer className="background-footer" style={{backgroundImage: `url(`+CamionMerco+`)`, }}>
    <div class=" text-center text-white">
        <div class="container px-6 pt-6">
          <div class="mb-6 text-5xl flex justify-center">
              rrunners@gmail.com
          </div>
          <div class="mb-6 text-3xl flex justify-center">
              06.34.23.27.10
          </div>
        </div>
        <div
          class="p-4 text-sm text-center">
          Mentions légales
        </div>
    </div>
</footer>
  )
}
