'use client'
import Image from 'next/image';

const MenuSection = () => {
    return (
        <section className="py-10 text-center">
          <h2 className='text-3xl mb-4 font-bold'>Our Menu</h2>
            <div className="container mx-auto flex flex-col md:flex-row justify-evenly ">
                <div className="relative w-full md:w-1/2 mb-4 cursor-pointer mr-6" onClick={() => window.location.href = '/menu'}>
                    <Image src="/path/to/menu-image.jpg" alt="Menu" layout="responsive" width={500} height={300} className="rounded-lg"/>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <span className="text-white text-xl font-bold">Menu</span>
                    </div>
                </div>
                <div className="relative w-full md:w-1/2 mb-4 cursor-pointer" onClick={() => window.location.href = '/kids-menu'}>
                    <Image src="/path/to/kids-menu-image.jpg" alt="Kids Menu" layout="responsive" width={500} height={300} className="rounded-lg"/>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <span className="text-white text-xl font-bold">Kids Menu</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
