import React from 'react';

const LogoDesign = () => {
  const projects = [
    {
      title: "Tech Startup Rebrand",
      image: "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?auto=format&fit=crop&q=80",
      description: "Modern and minimal logo design for a tech startup"
    },
    {
      title: "Restaurant Identity",
      image: "https://images.unsplash.com/photo-1636955860106-9eb89e576026?auto=format&fit=crop&q=80",
      description: "Complete brand identity for an upscale restaurant"
    }
  ];
<span><img src="/src/dandilogo.png" alt="Logo" className="h-60 w-auto" /></span>
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Logo Design</h1>
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

export default LogoDesign;