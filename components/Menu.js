'use client'
import Image from 'next/image';

const MenuSection = () => {
    const handleMenuClick = (url) => {
        window.open(url, '_blank'); 
    };

    return (
        <section className="py-10 text-center">
            <h2 className='text-3xl mb-4 font-bold'>Our Menu</h2>
            <div className="container mx-auto flex flex-col md:flex-row justify-evenly">
                <div className="relative w-full md:w-1/3 mb-4 cursor-pointer mr-6" onClick={() => handleMenuClick('/Yellow Illustration.pdf')}>
                    <Image 
                        src="/food2.jpg" 
                        alt="Food Menu" 
                        layout="responsive" 
                        width={400} 
                        height={250} 
                        className="rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <span className="text-white text-lg font-bold">Food Menu</span>
                    </div>
                </div>
                <div className="relative w-full md:w-1/3 mb-4 cursor-pointer mr-6" onClick={() => handleMenuClick('/Green and White.pdf')}>
                    <Image 
                        src="/juice2.jpg" 
                        alt="Juice Menu" 
                        layout="responsive" 
                        width={400} 
                        height={250} 
                        className="rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <span className="text-white text-lg font-bold">Juice Menu</span>
                    </div>
                </div>
                <div className="relative w-full md:w-1/3 mb-4 cursor-pointer" onClick={() => handleMenuClick('/Cream and Blue.pdf')}>
                    <Image 
                        src="/food2.jpg" 
                        alt="Take Out Menu" 
                        layout="responsive" 
                        width={400} 
                        height={250} 
                        className="rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <span className="text-white text-lg font-bold">Take Out Menu</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
