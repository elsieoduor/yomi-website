const CTASection = () => {
  return (
    <section className="bg-[#f7f4f4] text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 w-full pr-0 md:pr-16">
          <h1 className="title-font font-medium text-3xl text-[#182c21]">Get in Touch with Us</h1>
          <p className="leading-relaxed mt-4">
            We’d love to hear from you! Whether you have a question, feedback, <br />
            or just want to say hello, feel free to reach out.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 w-full bg-white rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 shadow-lg">
          <h2 className="text-[#182c21] text-lg font-medium title-font mb-5">Contact Form</h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#57ad7c] focus:ring-2 focus:ring-[#57ad7c] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#57ad7c] focus:ring-2 focus:ring-[#57ad7c] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#57ad7c] focus:ring-2 focus:ring-[#57ad7c] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              rows="4"
            ></textarea>
          </div>
          <button className="text-white bg-[#57ad7c] border-0 py-2 px-8 focus:outline-none hover:bg-[#45a36c] rounded text-lg">Send Message</button>
          <p className="text-xs text-gray-500 mt-3">We aim to respond within 24 hours.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
