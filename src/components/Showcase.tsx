import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Award, Users, Clock } from 'lucide-react';

const Showcase = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [mutedVideos, setMutedVideos] = useState({ 0: true, 1: true, 2: true });
  const videoRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('showcase');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const videos = [
    {
      id: 0,
      title: "Banyo Yenileme Süreci",
      description: "Modern banyo tasarımından montaja kadar tüm süreç",
      thumbnail: "https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    },
    {
      id: 1,
      title: "Profesyonel Döşeme İşleri",
      description: "Zemin ve duvar döşeme tekniklerimiz",
      thumbnail: "https://images.pexels.com/photos/5824866/pexels-photo-5824866.jpeg?auto=compress&cs=tinysrgb&w=800",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
    },
    {
      id: 2,
      title: "Müşteri Memnuniyeti",
      description: "Müşterilerimizden gelen yorumlar ve teşekkürler",
      thumbnail: "https://images.pexels.com/photos/8005399/pexels-photo-8005399.jpeg?auto=compress&cs=tinysrgb&w=800",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4"
    }
  ];

  const togglePlay = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video) {
      if (playingVideo === videoId) {
        video.pause();
        setPlayingVideo(null);
      } else {
        // Pause all other videos
        videoRefs.current.forEach((v, index) => {
          if (v && index !== videoId) {
            v.pause();
          }
        });
        video.play();
        setPlayingVideo(videoId);
      }
    }
  };

  const toggleMute = (videoId) => {
    const video = videoRefs.current[videoId];
    if (video) {
      video.muted = !video.muted;
      setMutedVideos(prev => ({
        ...prev,
        [videoId]: video.muted
      }));
    }
  };

  return (
    <section id="showcase" className="py-24 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8">
              <span className="text-amber-700">Çalışmalarımızı</span> İzleyin
            </h2>
            <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
              Gerçek projelerimizden videolar ile kaliteli işçiliğimizi ve müşteri memnuniyetimizi görün. 
              Her projede aynı özen ve profesyonellikle çalışıyoruz.
            </p>
          </div>

          {/* Statistics */}
          <div className={`grid grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-stone-800 mb-2">15+</div>
              <div className="text-stone-600 font-medium">Yıl Deneyim</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-stone-800 mb-2">1000+</div>
              <div className="text-stone-600 font-medium">Mutlu Müşteri</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-stone-800 mb-2">7/24</div>
              <div className="text-stone-600 font-medium">Acil Servis</div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div 
                key={video.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200 + 500}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <video
                    ref={el => videoRefs.current[video.id] = el}
                    className="w-full h-full object-cover"
                    poster={video.thumbnail}
                    muted={mutedVideos[video.id]}
                    loop
                    playsInline
                    onEnded={() => setPlayingVideo(null)}
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Tarayıcınız video oynatmayı desteklemiyor.
                  </video>
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => togglePlay(video.id)}
                        className="bg-white bg-opacity-90 hover:bg-opacity-100 text-stone-800 p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        {playingVideo === video.id ? (
                          <Pause className="h-6 w-6" />
                        ) : (
                          <Play className="h-6 w-6 ml-1" />
                        )}
                      </button>
                      <button
                        onClick={() => toggleMute(video.id)}
                        className="bg-white bg-opacity-90 hover:bg-opacity-100 text-stone-800 p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        {mutedVideos[video.id] ? (
                          <VolumeX className="h-6 w-6" />
                        ) : (
                          <Volume2 className="h-6 w-6" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Play indicator */}
                  {playingVideo !== video.id && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-amber-600 bg-opacity-90 text-white p-6 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 ml-1" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-stone-800 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Projenizi Hayata Geçirelim</h3>
                <p className="text-xl mb-8 text-amber-100">Ücretsiz keşif ve detaylı fiyat teklifi için hemen iletişime geçin</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a 
                    href="tel:+905321234567"
                    className="bg-white text-amber-700 px-10 py-5 rounded-xl font-bold hover:bg-amber-50 transition duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Hemen Ara: 0532 123 45 67
                  </a>
                  <a 
                    href="https://wa.me/905321234567"
                    className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-10 py-5 rounded-xl font-bold transition duration-300"
                  >
                    WhatsApp ile Yaz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;