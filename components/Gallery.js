/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Gallery</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Explore the vibrant flavors and delightful dishes that define our culinary journey. Our gallery showcases not just the food, but the experience we create at Wok & Roll. From mouthwatering appetizers to beautifully crafted desserts, each image captures the essence of our Asian fusion cuisine. Join us and see what awaits—delicious moments that are perfect for sharing!
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="/food1.jpg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="/food2.jpg" />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="/food3.jpg" />
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="/food4.jpg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="/food5.jpg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="/food6.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery;
