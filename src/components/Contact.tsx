import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form gönderildi:', formData);
    alert('Mesajınız için teşekkürler! En kısa sürede size dönüş yapacağız.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const istanbulDistricts = [
    'Adalar', 'Arnavutköy', 'Ataşehir', 'Avcılar', 'Bağcılar', 'Bahçelievler', 'Bakırköy', 'Başakşehir',
    'Bayrampaşa', 'Beşiktaş', 'Beykoz', 'Beylikdüzü', 'Beyoğlu', 'Büyükçekmece', 'Çatalca', 'Çekmeköy',
    'Esenler', 'Esenyurt', 'Eyüpsultan', 'Fatih', 'Gaziosmanpaşa', 'Güngören', 'Kadıköy', 'Kağıthane',
    'Kartal', 'Küçükçekmece', 'Maltepe', 'Pendik', 'Sancaktepe', 'Sarıyer', 'Silivri', 'Sultanbeyli',
    'Sultangazi', 'Şile', 'Şişli', 'Tuzla', 'Ümraniye', 'Üsküdar', 'Zeytinburnu'
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8">
              <span className="text-amber-700">İletişim</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
              Projenizi hayata geçirmek için bugün bizimle iletişime geçin. 
              Ücretsiz keşif ve fiyat teklifi için hemen arayın.
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-16">
            {/* İletişim Bilgileri */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-stone-800 mb-10">İletişim Bilgileri</h3>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6 p-6 bg-stone-50 rounded-2xl hover:bg-stone-100 transition duration-300">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-4 rounded-2xl">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-lg">Telefon</h4>
                    <p className="text-stone-600 text-lg">0532 123 45 67</p>
                    <p className="text-stone-500 text-sm">7/24 Acil Servis</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-6 bg-stone-50 rounded-2xl hover:bg-stone-100 transition duration-300">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-lg">WhatsApp</h4>
                    <p className="text-stone-600 text-lg">0532 123 45 67</p>
                    <p className="text-stone-500 text-sm">Hızlı yanıt garantisi</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-6 bg-stone-50 rounded-2xl hover:bg-stone-100 transition duration-300">
                  <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-2xl">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-lg">E-posta</h4>
                    <p className="text-stone-600 text-lg">info@anadolutesisat.com</p>
                    <p className="text-stone-500 text-sm">24 saat içinde yanıt</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-6 bg-stone-50 rounded-2xl hover:bg-stone-100 transition duration-300">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-lg">Hizmet Alanı</h4>
                    <p className="text-stone-600 text-lg">İstanbul - Tüm İlçeler</p>
                    <p className="text-stone-500 text-sm">Avrupa ve Anadolu Yakası</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 p-6 bg-stone-50 rounded-2xl hover:bg-stone-100 transition duration-300">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 rounded-2xl">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-lg">Çalışma Saatleri</h4>
                    <p className="text-stone-600">Pzt-Cum: 08:00-18:00</p>
                    <p className="text-stone-600">Cmt: 09:00-16:00</p>
                    <p className="text-stone-600">Paz: Sadece Acil Servis</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Hızlı İletişim */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4">WhatsApp Hızlı İletişim</h4>
                  <p className="mb-6 text-green-100">WhatsApp üzerinden anında yanıt alın</p>
                  <a 
                    href="https://wa.me/905321234567" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition duration-300 inline-flex items-center space-x-3 transform hover:scale-105"
                  >
                    <MessageCircle className="h-6 w-6" />
                    <span>WhatsApp'ta Sohbet Et</span>
                  </a>
                </div>
              </div>
            </div>

            {/* İletişim Formu */}
            <div>
              <form onSubmit={handleSubmit} className="bg-stone-50 p-10 rounded-2xl">
                <h3 className="text-2xl font-bold text-stone-800 mb-8">Bize Mesaj Gönderin</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-3">Ad Soyad *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300 text-lg"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-3">Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300 text-lg"
                      placeholder="0532 123 45 67"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-stone-700 mb-3">E-posta *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300 text-lg"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-3">Hizmet Türü</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300 text-lg"
                    >
                      <option value="">Hizmet seçin</option>
                      <option value="tesisat">Tesisat Hizmetleri</option>
                      <option value="banyo">Banyo Yenileme</option>
                      <option value="doseme">Profesyonel Döşeme</option>
                      <option value="acil">Acil Servis</option>
                      <option value="kesif">Ücretsiz Keşif</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-3">İlçe</label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300 text-lg"
                    >
                      <option value="">İlçe seçin</option>
                      {istanbulDistricts.map(district => (
                        <option key={district} value={district}>{district}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-bold text-stone-700 mb-3">Mesaj *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300 text-lg"
                    placeholder="Projeniz hakkında detaylı bilgi verin..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>

          {/* Müşteri Yorumları */}
          <div className="mt-24">
            <h3 className="text-3xl font-bold text-stone-800 text-center mb-16">Müşteri Yorumları</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ayşe Yılmaz",
                  location: "Kadıköy",
                  rating: 5,
                  review: "Banyomuzu tamamen yenilediler. Çok profesyonel ve temiz çalışıyorlar. Kesinlikle tavsiye ederim!"
                },
                {
                  name: "Mehmet Kaya",
                  location: "Beşiktaş",
                  rating: 5,
                  review: "Gece yarısı tesisat arızası için aradım, hemen geldiler. Çok memnun kaldım, teşekkürler!"
                },
                {
                  name: "Fatma Demir",
                  location: "Üsküdar",
                  rating: 5,
                  review: "Mutfak döşemesi harika oldu. Detaylara çok dikkat ediyorlar. Kesinlikle tekrar çalışırım."
                }
              ].map((review, index) => (
                <div key={index} className="bg-stone-50 p-8 rounded-2xl hover:shadow-lg transition duration-300">
                  <div className="flex items-center mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-6 italic text-lg leading-relaxed">"{review.review}"</p>
                  <div>
                    <p className="font-bold text-stone-800">{review.name}</p>
                    <p className="text-stone-500">{review.location}, İstanbul</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;