import React from 'react';

const PosterDesign = () => {
  const projects = [
    {
      title: "Election Campaign 2024",
      image: "https://images.unsplash.com/photo-1591189863011-0e521b4a6cc5?auto=format&fit=crop&q=80",
      description: "Series of political campaign posters"
    },
    {
      title: "Social Movement Posters",
      image: "https://images.unsplash.com/photo-1591189863729-137a18d36be7?auto=format&fit=crop&q=80",
      description: "Awareness campaign poster series"
    }
  ];
  <span><img src="/src/dandilogo.png" alt="Logo" className="h-60 w-auto" /></span>

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Poster Design</h1>
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

export default PosterDesign;