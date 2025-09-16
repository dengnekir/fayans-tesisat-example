import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Wrench, Clock } from 'lucide-react';

const Footer = () => {
  const istanbulDistricts = [
    'Kadıköy', 'Beşiktaş', 'Şişli', 'Beyoğlu', 'Fatih', 'Üsküdar', 'Bakırköy', 'Ataşehir',
    'Maltepe', 'Kartal', 'Pendik', 'Avcılar', 'Bahçelievler', 'Zeytinburnu'
  ];

  return (
    <footer className="bg-stone-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Şirket Bilgileri */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-3 rounded-xl">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Anadolu Tesisat Ustası</span>
                  <p className="text-amber-300 text-sm">İstanbul Geneli Hizmet</p>
                </div>
              </div>
              <p className="text-stone-300 mb-8 leading-relaxed text-lg">
                15 yılı aşkın deneyimimizle İstanbul'da profesyonel tesisat, döşeme ve banyo yenileme hizmetleri sunuyoruz. 
                Kaliteli işçilik ve müşteri memnuniyeti bizim önceliğimizdir.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl transition duration-300 transform hover:scale-110">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-xl transition duration-300 transform hover:scale-110">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-xl transition duration-300 transform hover:scale-110">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Hizmetler */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-amber-300">Hizmetlerimiz</h3>
              <ul className="space-y-3 text-stone-300">
                <li><a href="#" className="hover:text-amber-300 transition duration-300 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span>Tesisat Tamiri</span>
                </a></li>
                <li><a href="#" className="hover:text-amber-300 transition duration-300 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span>Banyo Yenileme</span>
                </a></li>
                <li><a href="#" className="hover:text-amber-300 transition duration-300 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span>Profesyonel Döşeme</span>
                </a></li>
                <li><a href="#" className="hover:text-amber-300 transition duration-300 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span>Acil Servis</span>
                </a></li>
                <li><a href="#" className="hover:text-amber-300 transition duration-300 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span>Ücretsiz Keşif</span>
                </a></li>
              </ul>
            </div>

            {/* İletişim Bilgileri */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-amber-300">İletişim</h3>
              <div className="space-y-4 text-stone-300">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">0532 123 45 67</p>
                    <p className="text-sm text-stone-400">7/24 Acil Servis</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <span>info@anadolutesisat.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <span>İstanbul - Tüm İlçeler</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <p>Pzt-Cum: 08:00-18:00</p>
                    <p>Cmt: 09:00-16:00</p>
                    <p>Paz: Sadece Acil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hizmet Verdiğimiz İlçeler */}
          <div className="border-t border-stone-800 pt-12 mb-12">
            <h3 className="text-xl font-bold mb-6 text-amber-300 text-center">Hizmet Verdiğimiz İlçeler</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
              {istanbulDistricts.map((district, index) => (
                <div key={index} className="text-stone-400 hover:text-amber-300 transition duration-300 cursor-pointer">
                  {district}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="text-stone-400 mb-4 lg:mb-0">
                <p>&copy; 2024 Anadolu Tesisat Ustası. Tüm hakları saklıdır.</p>
              </div>
              <div className="flex space-x-8 text-stone-400">
                <a href="#" className="hover:text-amber-300 transition duration-300">Gizlilik Politikası</a>
                <a href="#" className="hover:text-amber-300 transition duration-300">Hizmet Şartları</a>
                <a href="#" className="hover:text-amber-300 transition duration-300">Site Haritası</a>
              </div>
            </div>
          </div>

          {/* Lisans Bilgileri */}
          <div className="mt-8 text-center text-stone-400 text-sm">
            <p>Lisanslı ve Sigortalı | Ticaret Sicil No: 12345 | 7/24 Acil Servis Hizmeti</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;