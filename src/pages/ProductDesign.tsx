import React from 'react';

const ProductDesign = () => {
  const projects = [
    {
      title: "Smart Home Device",
      image: "https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?auto=format&fit=crop&q=80",
      description: "Modern smart home device design with intuitive interface"
    },
    {
      title: "Sustainable Packaging",
      image: "https://images.unsplash.com/photo-1585435421671-0c16737a6f81?auto=format&fit=crop&q=80",
      description: "Eco-friendly packaging design for consumer products"
    }
  ];
<span><img src="/src/dandilogo.png" alt="Logo" className="h-60 w-auto" /></span>
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Product Design</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDesign;