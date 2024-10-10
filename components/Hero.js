const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white"
      style={{ backgroundImage: "url('/food.jpg')", objectFit: 'cover' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-3xl sm:text-5xl font-bold">Discover the Flavors of Asia</h1>
        <p className="mt-4 text-lg sm:text-xl">An unforgettable fusion of taste and culture</p>
      </div>
    </section>
  );
};

export default Hero;
