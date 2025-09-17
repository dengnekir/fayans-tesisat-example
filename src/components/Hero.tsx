import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, MapPin } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with tile texture overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(120, 53, 15, 0.7), rgba(146, 64, 14, 0.7)), url('https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
        }}
      ></div>
      
      {/* Subtle tile pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Crect width='1' height='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <MapPin className="h-5 w-5 text-amber-300" />
            <span className="text-amber-200 font-medium">İstanbul Geneli Hizmet</span>
          </div>
          
          <div className="flex justify-center items-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-amber-300 fill-current" />
            ))}
            <span className="ml-3 text-amber-200">15+ Yıl Deneyim • 1000+ Mutlu Müşteri</span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-8 leading-tight transition-all duration-1200 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="block text-white">Anadolu</span>
            <span className="block text-amber-300">Tesisat Ustası</span>
            <span className="block text-stone-200 text-2xl md:text-3xl font-medium mt-4">Ercan Gökçur</span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-stone-100 transition-all duration-1200 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            İstanbul'da profesyonel fayans döşeme ve tesisat hizmetleri. 
            Uzman Ercan Gökçur ile kaliteli işçilik ve müşteri memnuniyeti garantisi.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1200 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-xl font-semibold flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="text-lg">Ücretsiz Keşif</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-800 px-10 py-5 rounded-xl font-semibold transition-all duration-300 text-lg">
              Projelerimizi İncele
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;