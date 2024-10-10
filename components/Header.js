/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#182c21] shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
        <p className='text-xl font bold text-white'>Mamushi Restaurant</p>
          <img src="/logo.svg" alt="Restaurant Logo" className="w-40" />
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#home" className="text-white hover:text-[#57ad7c] transition-colors duration-200">Home</Link>
          <Link href="#menu" className="text-white hover:text-[#57ad7c] transition-colors duration-200">Menu</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
