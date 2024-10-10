import { FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-[#dff1e5]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4 justify-between">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#182c21] tracking-widest text-sm mb-3">Mamushi Restaurant</h2>
            <p className="mb-4 text-[#182c21]">Where East Meets West: A Culinary Journey Through Bold Flavors and Inspired Fusion</p>
            <h2 className="title-font font-medium text-[#182c21] tracking-widest text-sm mb-1 mt-3">Quick Links</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-[#182c21] hover:text-[#57ad7c] transition-colors duration-200">Home</a>
              </li>
              <li>
                <a className="text-[#182c21] hover:text-[#57ad7c] transition-colors duration-200">Menu</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#182c21] tracking-widest text-sm mb-3">CONTACT & HOURS</h2>
            <div className="flex items-center mb-4">
              <FaPhone className="mr-2 text-[#182c21]" />
              <span className="text-[#182c21]">Contact: (123) 456-7890</span>
            </div>
            <div className="mb-3">
              <h3 className="font-medium text-[#182c21] tracking-widest text-sm mb-1">Weekdays</h3>
              <p className="text-[#182c21]">Mon - Fri: 9 AM - 10 PM</p>
            </div>
            <div>
              <h3 className="font-medium text-[#182c21] tracking-widest text-sm mb-1">Weekends & Holidays</h3>
              <p className="text-[#182c21]">Sat - Sun: 10 AM - 11 PM</p>
              <p className="text-[#182c21]">Holidays: 10 AM - 10 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#57ad7c]">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">
            © 2024 Wok & Roll — 
            <a href="#" className="text-white ml-1" target="_blank" rel="noopener noreferrer">@yukidev</a>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-white text-sm">Elegance in Every Bite!</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
