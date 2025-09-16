import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Modern Banyo Yenileme - Beşiktaş",
      category: "Banyo Yenileme",
      location: "Beşiktaş, İstanbul",
      before: "https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Mutfak Tezgah Döşemesi - Kadıköy",
      category: "Döşeme",
      location: "Kadıköy, İstanbul",
      before: "https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Komple Tesisat Yenileme - Şişli",
      category: "Tesisat",
      location: "Şişli, İstanbul",
      before: "https://images.pexels.com/photos/1358914/pexels-photo-1358914.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Lüks Banyo Döşemesi - Beyoğlu",
      category: "Döşeme",
      location: "Beyoğlu, İstanbul",
      before: "https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Ana Banyo Yenileme - Üsküdar",
      category: "Banyo Yenileme",
      location: "Üsküdar, İstanbul",
      before: "https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/6045184/pexels-photo-6045184.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Zemin Döşeme Projesi - Fatih",
      category: "Döşeme",
      location: "Fatih, İstanbul",
      before: "https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/5824866/pexels-photo-5824866.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const openLightbox = (project, type) => {
    setSelectedImage({...project, type});
    setCurrentIndex(projects.findIndex(p => p.id === project.id));
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % projects.length 
      : (currentIndex - 1 + projects.length) % projects.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage({...projects[newIndex], type: selectedImage.type});
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Banyo Yenileme': return 'bg-amber-100 text-amber-700';
      case 'Döşeme': return 'bg-teal-100 text-teal-700';
      case 'Tesisat': return 'bg-blue-100 text-blue-700';
      default: return 'bg-stone-100 text-stone-700';
    }
  };

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8">
              <span className="text-amber-700">Projelerimiz</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
              İstanbul'un farklı ilçelerinde gerçekleştirdiğimiz projeleri inceleyin. 
              Öncesi ve sonrası fotoğraflarla kaliteli işçiliğimizi görün.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative">
                  <div className="grid grid-cols-2 h-64">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.before} 
                        alt={`${project.title} - Öncesi`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                        onClick={() => openLightbox(project, 'before')}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                      </div>
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Öncesi
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.after} 
                        alt={`${project.title} - Sonrası`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                        onClick={() => openLightbox(project, 'after')}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                      </div>
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Sonrası
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                    {project.location}
                  </p>
                  <button className="text-amber-600 hover:text-amber-700 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300">
                    <span>Detayları Gör</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
              <div className="relative max-w-6xl max-h-full w-full">
                {/* Close button */}
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-amber-300 z-20 bg-black bg-opacity-50 rounded-full p-2 transition-colors duration-300"
                >
                  <X className="h-8 w-8" />
                </button>
                
                {/* Navigation buttons */}
                <button 
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-300 z-20 bg-black bg-opacity-50 rounded-full p-3 transition-colors duration-300"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button 
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-300 z-20 bg-black bg-opacity-50 rounded-full p-3 transition-colors duration-300"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
                
                <img 
                  src={selectedImage.type === 'before' ? selectedImage.before : selectedImage.after}
                  alt={`${selectedImage.title} - ${selectedImage.type === 'before' ? 'Öncesi' : 'Sonrası'}`}
                  className="max-w-full max-h-full object-contain rounded-xl mx-auto"
                />
                
                {/* Image info */}
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-6 rounded-xl max-w-md">
                  <h3 className="font-bold text-lg mb-2">{selectedImage.title}</h3>
                  <p className="text-amber-300 mb-1">{selectedImage.type === 'before' ? 'Öncesi' : 'Sonrası'}</p>
                  <p className="text-sm text-stone-300">{selectedImage.location}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;