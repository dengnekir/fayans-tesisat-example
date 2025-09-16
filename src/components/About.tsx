import React from 'react';
import { Award, Users, Clock, CheckCircle, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8">
              <span className="text-amber-700">Anadolu Tesisat Ustası</span> Hakkında
            </h2>
            <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
              15 yılı aşkın deneyimimizle İstanbul'un her köşesinde kaliteli tesisat, döşeme ve banyo yenileme hizmetleri sunuyoruz. 
              Müşteri memnuniyeti ve kaliteli işçilik bizim önceliğimizdir.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/8005399/pexels-photo-8005399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Profesyonel tesisatçı çalışırken"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover transform hover:scale-105 transition duration-500"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h3 className="text-3xl font-bold text-stone-800 mb-8">Neden Bizi Tercih Etmelisiniz?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-stone-800 text-lg">Lisanslı ve Sigortalı</h4>
                    <p className="text-stone-600">Tam lisanslı profesyoneller ve kapsamlı sigorta güvencesi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-stone-800 text-lg">7/24 Acil Servis</h4>
                    <p className="text-stone-600">Acil tesisat sorunları için gece gündüz ulaşılabilirlik</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-stone-800 text-lg">Kalite Garantisi</h4>
                    <p className="text-stone-600">Tüm işlerimizde memnuniyet garantisi ve garanti süresi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300">
                  <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-stone-800 text-lg">Şeffaf Fiyatlandırma</h4>
                    <p className="text-stone-600">Net fiyat politikası, gizli maliyet yok</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-amber-600" />
              </div>
              <div className="text-4xl font-bold text-stone-800 mb-3">15+</div>
              <div className="text-stone-600 font-medium">Yıl Deneyim</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-teal-600" />
              </div>
              <div className="text-4xl font-bold text-stone-800 mb-3">1000+</div>
              <div className="text-stone-600 font-medium">Mutlu Müşteri</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-stone-800 mb-3">2500+</div>
              <div className="text-stone-600 font-medium">Tamamlanan Proje</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-stone-800 mb-3">39</div>
              <div className="text-stone-600 font-medium">İlçe Hizmet</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;