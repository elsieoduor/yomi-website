/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Why = () => {
  return (
    <section className="bg-[#f7f4f4] text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-[#182c21] mb-4">Why Us?</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            At Wok & Roll, we believe in the magic of fusion. Our carefully curated menu blends authentic Asian flavors with innovative culinary techniques, creating a dining experience that&apos;s both familiar and exciting. With a commitment to fresh ingredients and artistic presentation, we invite you to embark on a flavorful journey that celebrates diversity in every bite. Join us and discover why we’re not just a meal, but a memorable experience!
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#57ad7c] inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#57ad7c] text-white mb-5 flex-shrink-0">
              <img src="/cook.png" alt="Restaurant Logo" className="w-16 h-16" />  
            </div>
            <div className="flex-grow">
              <h2 className="text-[#182c21] text-lg title-font font-medium mb-3">Authentic Culinary Expertise</h2>
              <p className="leading-relaxed text-base">Our chefs bring years of experience and a passion for Asian cuisine, ensuring every dish is crafted with skill and authenticity. From traditional recipes to contemporary interpretations, we strive to deliver flavors that transport you straight to the heart of Asia.</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#57ad7c] text-white mb-5 flex-shrink-0">
              <img src="/family.png" alt="Restaurant Logo" className="w-16 h-16" />  
            </div>
            <div className="flex-grow">
              <h2 className="text-[#182c21] text-lg title-font font-medium mb-3">Family-Friendly Atmosphere</h2>
              <p className="leading-relaxed text-base">At Wok & Roll, we celebrate the joy of family dining. Our warm and welcoming environment is designed for guests of all ages, featuring a dedicated kids&apos; menu with flavorful, nutritious options. With playful decor, engaging activities, and spacious seating, we ensure that every family can enjoy their meal together in comfort and style.</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#57ad7c] text-white mb-5 flex-shrink-0">
              <img src="/dining.png" alt="Restaurant Logo" className="w-16 h-16" />  
            </div>
            <div className="flex-grow">
              <h2 className="text-[#182c21] text-lg title-font font-medium mb-3">Innovative Dining Experience</h2>
              <p className="leading-relaxed text-base">At Wok & Roll, we believe dining is an experience. Our vibrant atmosphere, unique plating techniques, and interactive menu options invite guests to engage with their food and each other. Whether you’re enjoying a meal with friends or celebrating a special occasion, we ensure every visit is memorable and delightful.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
