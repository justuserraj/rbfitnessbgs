import { useState, useEffect } from 'react';
import { Dumbbell, Phone, MapPin, Clock, Users, Award, Target, Heart, MessageCircle, Menu, X, Navigation, Star, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const gymData = {
    name: "RB Fitness",
    tagline: "Your Local Fitness Destination",
    address: "Ulao Pokhar Rd, Ulao, Begusarai, Bihar 851134",
    phone: "07909094099",
    whatsapp: "919909094099",
    coordinates: { lat: 25.4237, lng: 86.4882 },
    areaName: "Begusarai",
    mapsUrl: "https://maps.google.com/?q=25.4237,86.4882"
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-black text-white">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/98 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <Dumbbell className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" />
              <span className="text-xl sm:text-2xl font-bold tracking-tight">{gymData.name}</span>
            </div>

            <div className="hidden lg:flex items-center space-x-1 xl:space-x-8">
              <button onClick={() => scrollToSection('home')} className="px-3 py-2 text-sm font-medium hover:text-red-600 transition-colors duration-200">Home</button>
              <button onClick={() => scrollToSection('about')} className="px-3 py-2 text-sm font-medium hover:text-red-600 transition-colors duration-200">About</button>
              <button onClick={() => scrollToSection('services')} className="px-3 py-2 text-sm font-medium hover:text-red-600 transition-colors duration-200">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="px-3 py-2 text-sm font-medium hover:text-red-600 transition-colors duration-200">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="px-3 py-2 text-sm font-medium hover:text-red-600 transition-colors duration-200">Contact</button>
              <a href={`tel:${gymData.phone}`} className="ml-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-lg">
                Join Now
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden pb-4 space-y-1 border-t border-gray-800">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-3 text-sm font-medium hover:text-red-600 hover:bg-gray-900/50 transition-all rounded-lg">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-sm font-medium hover:text-red-600 hover:bg-gray-900/50 transition-all rounded-lg">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-sm font-medium hover:text-red-600 hover:bg-gray-900/50 transition-all rounded-lg">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-4 py-3 text-sm font-medium hover:text-red-600 hover:bg-gray-900/50 transition-all rounded-lg">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-sm font-medium hover:text-red-600 hover:bg-gray-900/50 transition-all rounded-lg">Contact</button>
              <a href={`tel:${gymData.phone}`} className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-4 py-3 rounded-lg font-semibold text-sm text-center transition-all mt-2">
                Join Now
              </a>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="relative min-h-screen pt-20 flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-30"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-20 lg:py-32">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-sans mb-4 sm:mb-6 tracking-tight leading-tight">
              <span className="block text-white">{gymData.name}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-4">Elite Fitness Hub</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-red-500 font-semibold tracking-wide">
              {gymData.tagline}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Transform Your Body, Transform Your Life
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
              <a href={`tel:${gymData.phone}`} className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2 group">
                <span>Join Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={gymData.mapsUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 border border-white/20 hover:border-white/40">
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight">About Our Gym</h2>
            <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8 sm:mb-12 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-12 sm:mb-16 max-w-3xl mx-auto">
              Located in {gymData.areaName}, we help people transform their fitness with expert guidance and modern equipment. Our dedicated team of trainers and state-of-the-art facilities create the perfect environment for achieving your fitness goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
              <div className="group bg-gradient-to-br from-gray-800 to-black p-8 sm:p-10 rounded-2xl hover:from-red-600/20 hover:to-black transition-all duration-300 border border-gray-700 hover:border-red-600/50 shadow-xl">
                <div className="inline-flex p-3 sm:p-4 bg-red-600/20 rounded-xl mb-6 group-hover:bg-red-600/40 transition-colors">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Expert Trainers</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">Certified professionals dedicated to your success</p>
              </div>
              <div className="group bg-gradient-to-br from-gray-800 to-black p-8 sm:p-10 rounded-2xl hover:from-red-600/20 hover:to-black transition-all duration-300 border border-gray-700 hover:border-red-600/50 shadow-xl">
                <div className="inline-flex p-3 sm:p-4 bg-red-600/20 rounded-xl mb-6 group-hover:bg-red-600/40 transition-colors">
                  <Dumbbell className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Modern Equipment</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">Latest fitness technology and machines</p>
              </div>
              <div className="group bg-gradient-to-br from-gray-800 to-black p-8 sm:p-10 rounded-2xl hover:from-red-600/20 hover:to-black transition-all duration-300 border border-gray-700 hover:border-red-600/50 shadow-xl">
                <div className="inline-flex p-3 sm:p-4 bg-red-600/20 rounded-xl mb-6 group-hover:bg-red-600/40 transition-colors">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Community</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">Join a supportive fitness family</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight">Our Services</h2>
            <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Dumbbell, title: 'Strength Training', desc: 'Build muscle and increase power with our comprehensive strength programs' },
              { icon: Heart, title: 'Weight Loss', desc: 'Achieve your ideal weight with personalized nutrition and training plans' },
              { icon: Target, title: 'Personal Training', desc: 'One-on-one coaching tailored to your specific fitness goals' },
              { icon: Clock, title: 'Cardio Training', desc: 'Improve endurance and heart health with our cardio programs' },
              { icon: Users, title: 'Group Workouts', desc: 'Stay motivated with energetic group fitness classes' },
              { icon: Award, title: 'Expert Guidance', desc: 'Professional support every step of your fitness journey' }
            ].map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-900 to-black p-8 sm:p-10 rounded-2xl hover:from-red-600/30 hover:to-black transition-all duration-300 transform hover:scale-105 border border-gray-800 hover:border-red-600/50 shadow-xl">
                <div className="inline-flex p-3 sm:p-4 bg-red-600/20 rounded-xl mb-6 group-hover:bg-red-600/40 transition-colors">
                  <service.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight">Gym Gallery</h2>
            <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800'
            ].map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl aspect-square group shadow-xl">
                <img src={img} alt={`Gym ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight">Find Us</h2>
            <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">Visit us at our location in {gymData.areaName}</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <iframe
                src={`https://maps.google.com/maps?q=${gymData.coordinates.lat},${gymData.coordinates.lng}&z=15&output=embed`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
            <div className="text-center mt-8 sm:mt-10">
              <a href={gymData.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Navigation className="w-5 h-5" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight">What Our Members Say</h2>
            <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: 'Sarah M.', review: 'Best gym in the area! The trainers are incredibly knowledgeable and the equipment is always well-maintained.', rating: 5 },
              { name: 'Mike R.', review: 'Affordable and great trainers. I\'ve lost 30 pounds in 4 months and feel stronger than ever!', rating: 5 },
              { name: 'Jessica L.', review: 'Good environment for beginners. Everyone is so welcoming and supportive. Highly recommend!', rating: 5 },
              { name: 'David K.', review: 'The personal training sessions have been life-changing. Best investment I\'ve made in my health.', rating: 5 },
              { name: 'Emily T.', review: 'Clean facilities, modern equipment, and a great community atmosphere. Love this place!', rating: 5 }
            ].map((review, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-black p-8 sm:p-10 rounded-2xl border border-gray-700 hover:border-red-600/50 shadow-xl transition-all duration-300 hover:shadow-xl hover:shadow-red-600/20">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-sm sm:text-base leading-relaxed">"{review.review}"</p>
                <p className="font-bold text-red-600 text-sm sm:text-base">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight">Contact Us</h2>
            <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-br from-gray-800 to-black p-8 sm:p-10 rounded-2xl border border-gray-700 hover:border-red-600/50 transition-all duration-300 shadow-xl hover:shadow-red-600/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 sm:p-4 bg-red-600/20 rounded-xl flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg sm:text-xl mb-2">Phone</h3>
                    <a href={`tel:${gymData.phone}`} className="text-gray-300 hover:text-red-600 transition-colors text-base sm:text-lg font-semibold break-all">
                      {gymData.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-black p-8 sm:p-10 rounded-2xl border border-gray-700 hover:border-red-600/50 transition-all duration-300 shadow-xl hover:shadow-red-600/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 sm:p-4 bg-red-600/20 rounded-xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg sm:text-xl mb-2">Address</h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{gymData.address}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-black p-8 sm:p-10 rounded-2xl border border-gray-700 hover:border-red-600/50 transition-all duration-300 shadow-xl hover:shadow-red-600/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 sm:p-4 bg-red-600/20 rounded-xl flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg sm:text-xl mb-3">Hours</h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Mon-Fri: 5:00 AM - 11:00 PM</p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Sat-Sun: 6:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a href={`tel:${gymData.phone}`} className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 sm:py-4 rounded-full font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 group">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Call
                </a>
                <a href={`https://wa.me/${gymData.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-6 py-3 sm:py-4 rounded-full font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 group">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-black p-4 sm:p-8 rounded-2xl border border-gray-700 shadow-xl overflow-hidden">
              <iframe
                src={`https://maps.google.com/maps?q=${gymData.coordinates.lat},${gymData.coordinates.lng}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-t from-black to-gray-900 py-12 sm:py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <Dumbbell className="w-7 h-7 sm:w-8 sm:h-8 text-red-600" />
            <span className="text-xl sm:text-2xl font-bold">{gymData.name}</span>
          </div>
          <p className="text-gray-400 mb-2 text-sm sm:text-base">{gymData.address}</p>
          <p className="text-gray-400 mb-6 text-sm sm:text-base font-semibold">{gymData.phone}</p>
          <p className="text-gray-600 text-xs sm:text-sm">© 2024 {gymData.name}. All rights reserved. | Your Local Fitness Destination</p>
          <p className="text-gray-700 text-[10px] mt-4 uppercase tracking-[0.2em]">Designed and Developed by <span className="text-gray-500 font-bold tracking-widest">VizoxStudio</span></p>
        </div>
      </footer>

      <a href={`tel:${gymData.phone}`} className="hidden sm:flex fixed bottom-6 right-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 p-4 rounded-full shadow-2xl transition-all transform hover:scale-125 z-40 items-center justify-center" title="Call us">
        <Phone className="w-6 h-6" />
      </a>

      <a href={`https://wa.me/${gymData.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hidden sm:flex fixed bottom-24 right-6 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 p-4 rounded-full shadow-2xl transition-all transform hover:scale-125 z-40 items-center justify-center" title="Message on WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;
