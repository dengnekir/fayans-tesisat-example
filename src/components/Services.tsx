import React from 'react';
import { Wrench, Droplets, Hammer, PaintBucket, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: PaintBucket,
      title: "Fayans Döşeme ve Yenileme",
      description: "Banyo, mutfak ve tüm yaşam alanlarınızda profesyonel fayans döşeme hizmetleri. Modern tasarım ve kaliteli malzemelerle mükemmel sonuçlar.",
      features: ["Banyo fayansı", "Mutfak döşeme", "Zemin kaplaması", "Duvar kaplaması"],
      color: "from-amber-500 to-amber-600",
      professional: ""
    },
    {
      icon: Droplets,
      title: "Tesisat İşleri",
      description: "Su tesisatı tamiri, montajı, kaçak tespiti ve acil tesisat hizmetleri. Uzman Ercan Gökçur ile profesyonel çözümler.",
      features: ["Acil tamir", "Boru montajı", "Kaçak tespiti", "Su tesisatı"],
      color: "from-teal-500 to-teal-600",
      professional: "Sorumlu: Ercan Gökçur"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8">
              <span className="text-amber-700">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
              İstanbul genelinde tesisat, döşeme ve banyo yenileme alanlarında profesyonel hizmet sunuyoruz. 
              Kaliteli malzeme ve uzman işçilikle projelerinizi hayata geçiriyoruz.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white border border-stone-200 rounded-2xl p-10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 mb-6 group-hover:text-amber-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  {service.professional && (
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 mb-6">
                      <p className="text-teal-700 font-semibold text-sm">{service.professional}</p>
                    </div>
                  )}
                  <p className="text-stone-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-stone-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl">
                    Detaylı Bilgi Al
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-stone-800 to-stone-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Acil Servis İhtiyacınız mı Var?</h3>
              <p className="text-xl mb-8 text-stone-200">7/24 acil tesisat sorunları için hemen arayın</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="tel:+905321234567"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg hover:shadow-xl"
                >
                  <Phone className="h-5 w-5" />
                  <span>Acil Hat: 0532 123 45 67</span>
                </a>
                <a 
                  href="https://wa.me/905321234567"
                  className="border-2 border-white text-white hover:bg-white hover:text-stone-800 px-10 py-5 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3"
                >
                  <span>WhatsApp ile İletişim</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;