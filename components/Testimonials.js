import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font bg-[#e5ebe7]">
      <div className="container px-5 py-24 mx-auto">
        <h2 className='text-center mb-6 font-bold text-3xl text-[#284d38]'>Testimonials</h2>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                width={80}  // Set to the actual width of your image
                height={80} // Set to the actual height of your image
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="/john2.png"
              />
              <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90&apos;s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span className="inline-block h-1 w-10 rounded bg-[#57ad7c] mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">John Doe</h2>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                width={80}  // Adjust as needed
                height={80} // Adjust as needed
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="/jane.png"
              />
              <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90&apos;s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span className="inline-block h-1 w-10 rounded bg-[#57ad7c] mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Jane Doe</h2>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                width={80}  // Adjust as needed
                height={80} // Adjust as needed
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="/john.png"
              />
              <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90&apos;s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span className="inline-block h-1 w-10 rounded bg-[#57ad7c] mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Yuki Oduor</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
