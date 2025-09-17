import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Wrench, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-2 rounded-lg">
              <Wrench className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-amber-800">Anadolu Tesisat Ustası</span>
              <p className="text-xs text-amber-600 font-medium">İstanbul Geneli Hizmet</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <a href="#home" className="text-stone-700 hover:text-amber-600 transition duration-300 font-medium">Ana Sayfa</a>
            <a href="#about" className="text-stone-700 hover:text-amber-600 transition duration-300 font-medium">Hakkımızda</a>
            <a href="#services" className="text-stone-700 hover:text-amber-600 transition duration-300 font-medium">Hizmetler</a>
            <a href="#showcase" className="text-stone-700 hover:text-amber-600 transition duration-300 font-medium">Videolar</a>
            <a href="#gallery" className="text-stone-700 hover:text-amber-600 transition duration-300 font-medium">Projeler</a>
            <a href="#contact" className="text-stone-700 hover:text-amber-600 transition duration-300 font-medium">İletişim</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-amber-50 px-4 py-2 rounded-lg">
              <Phone className="h-4 w-4 text-amber-600" />
              <span className="text-stone-700 font-semibold">0532 123 45 67</span>
            </div>
          </div>

          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-amber-50 transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-stone-700" /> : <Menu className="h-6 w-6 text-stone-700" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-stone-200">
            <nav className="px-6 py-6 space-y-4">
              <a href="#home" className="block text-stone-700 hover:text-amber-600 transition duration-300 font-medium py-2">Ana Sayfa</a>
              <a href="#about" className="block text-stone-700 hover:text-amber-600 transition duration-300 font-medium py-2">Hakkımızda</a>
              <a href="#services" className="block text-stone-700 hover:text-amber-600 transition duration-300 font-medium py-2">Hizmetler</a>
              <a href="#showcase" className="block text-stone-700 hover:text-amber-600 transition duration-300 font-medium py-2">Videolar</a>
              <a href="#gallery" className="block text-stone-700 hover:text-amber-600 transition duration-300 font-medium py-2">Projeler</a>
              <a href="#contact" className="block text-stone-700 hover:text-amber-600 transition duration-300 font-medium py-2">İletişim</a>
              <div className="flex items-center space-x-2 pt-4 border-t border-stone-200">
                <Phone className="h-5 w-5 text-amber-600" />
                <span className="text-stone-700 font-semibold">0532 123 45 67</span>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/905321234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
};

export default Header;