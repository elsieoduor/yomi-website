const services = [
  { title: 'Sushi', description: 'Freshly made sushi with a twist.' },
  { title: 'Dim Sum', description: 'Steamed delicacies to delight your palate.' },
  { title: 'Ramen', description: 'Hearty bowls of ramen with rich flavors.' },
];

const Service = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">We Offer Top Notch Cuisine</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <a href="#" className="mt-4 text-blue-500 hover:underline">View Menu</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
