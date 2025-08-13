import React, { useState } from 'react';
import { MapPin, Calendar, Users, Star, Clock, Camera, Navigation, Heart, Share2, Info } from 'lucide-react';
import { Page } from '../App';

interface ReligiousPlacesProps {
  onNavigate: (page: Page) => void;
}

export const ReligiousPlaces: React.FC<ReligiousPlacesProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Places', count: 247 },
    { id: 'temples', label: 'Hindu Temples', count: 156 },
    { id: 'mosques', label: 'Mosques', count: 34 },
    { id: 'gurudwaras', label: 'Gurudwaras', count: 28 },
    { id: 'churches', label: 'Churches', count: 15 },
    { id: 'buddhist', label: 'Buddhist Sites', count: 14 }
  ];

  const religiousPlaces = [
    {
      id: 1,
      name: "Varanasi - Kashi Vishwanath Temple",
      category: "temples",
      state: "Uttar Pradesh",
      deity: "Lord Shiva",
      established: "11th Century (Current structure: 1780)",
      significance: "One of the 12 Jyotirlingas, holiest city in Hinduism",
      description: "The Golden Temple of Varanasi is one of the most sacred Hindu temples dedicated to Lord Shiva. Located on the western bank of the holy river Ganga, it's believed that a single visit and worship can grant liberation (moksha).",
      image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800",
      festivals: ["Maha Shivratri", "Ganga Aarti", "Dev Deepawali"],
      bestTime: "October to March",
      timings: "3:00 AM - 11:00 PM",
      architecture: "North Indian temple architecture with gold-plated spire",
      legends: "Lord Shiva himself resided here, making it the most sacred place on earth",
      rituals: ["Daily Ganga Aarti", "Rudrabhishek", "Mangala Aarti"],
      nearbyAttractions: ["Dashashwamedh Ghat", "Sarnath", "Ramnagar Fort"],
      rating: 4.8,
      reviews: 15420,
      coordinates: { lat: 25.3176, lng: 83.0199 }
    },
    {
      id: 2,
      name: "Tirupati Balaji - Venkateswara Temple",
      category: "temples",
      state: "Andhra Pradesh",
      deity: "Lord Venkateswara (Vishnu)",
      established: "300 CE (Pallava Dynasty)",
      significance: "Richest temple in the world, major Vaishnavite pilgrimage site",
      description: "Located on Tirumala Hills, this temple is dedicated to Lord Venkateswara, an incarnation of Vishnu. It receives the highest number of pilgrims annually and is known for its immense wealth and devotion.",
      image: "https://images.pexels.com/photos/8078361/pexels-photo-8078361.jpeg?auto=compress&cs=tinysrgb&w=800",
      festivals: ["Brahmotsavam", "Vaikunta Ekadashi", "Rathasaptami"],
      bestTime: "September to February",
      timings: "2:30 AM - 1:00 AM (Next day)",
      architecture: "Dravidian architecture with intricate gopurams and mandapams",
      legends: "Lord Vishnu incarnated here to save humanity in Kali Yuga",
      rituals: ["Suprabhatam", "Thomala Seva", "Ekanta Seva"],
      nearbyAttractions: ["Sri Vari Museum", "Akasa Ganga", "Papavinasam"],
      rating: 4.9,
      reviews: 28750,
      coordinates: { lat: 13.6833, lng: 79.3167 }
    },
    {
      id: 3,
      name: "Golden Temple - Harmandir Sahib",
      category: "gurudwaras",
      state: "Punjab",
      deity: "Guru Granth Sahib",
      established: "1604 CE",
      significance: "Holiest Gurudwara in Sikhism, symbol of equality and brotherhood",
      description: "The Golden Temple, officially known as Harmandir Sahib, is the holiest Gurudwara of Sikhism. Its stunning golden facade and serene sarovar (holy pool) make it one of India's most beautiful religious sites.",
      image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800",
      festivals: ["Guru Nanak Jayanti", "Baisakhi", "Diwali"],
      bestTime: "October to March",
      timings: "24 hours (Darbar Sahib closes 10 PM - 3 AM for cleaning)",
      architecture: "Indo-Islamic architecture with gold-plated dome and marble inlay work",
      legends: "Built by Guru Arjan Dev, the fifth Sikh Guru, as a place of worship for all religions",
      rituals: ["Continuous Kirtan", "Langar (Free community kitchen)", "Palki Sahib ceremony"],
      nearbyAttractions: ["Jallianwala Bagh", "Partition Museum", "Wagah Border"],
      rating: 4.9,
      reviews: 45230,
      coordinates: { lat: 31.6200, lng: 74.8765 }
    },
    {
      id: 4,
      name: "Ajmer Sharif Dargah",
      category: "mosques",
      state: "Rajasthan",
      deity: "Khwaja Moinuddin Chishti",
      established: "13th Century",
      significance: "Most important Sufi shrine in India, visited by people of all faiths",
      description: "The shrine of Khwaja Moinuddin Chishti, a revered Sufi saint, attracts millions of pilgrims annually. Known for its message of love, peace, and harmony, it's a symbol of India's composite culture.",
      image: "https://images.pexels.com/photos/9867704/pexels-photo-9867704.jpeg?auto=compress&cs=tinysrgb&w=800",
      festivals: ["Urs Festival", "Eid celebrations", "Qawwali nights"],
      bestTime: "October to March",
      timings: "4:00 AM - 10:00 PM",
      architecture: "Indo-Islamic architecture with beautiful marble work and calligraphy",
      legends: "Khwaja Sahib came from Persia to spread the message of love and peace",
      rituals: ["Qawwali performances", "Chadar offering", "Fatiha prayers"],
      nearbyAttractions: ["Ana Sagar Lake", "Taragarh Fort", "Adhai Din Ka Jhonpra"],
      rating: 4.7,
      reviews: 18960,
      coordinates: { lat: 26.4499, lng: 74.6399 }
    },
    {
      id: 5,
      name: "Meenakshi Amman Temple",
      category: "temples",
      state: "Tamil Nadu",
      deity: "Goddess Meenakshi and Lord Sundareswarar",
      established: "6th Century CE (Current structure: 17th Century)",
      significance: "Historic Hindu temple, architectural marvel of Dravidian style",
      description: "This historic temple complex is dedicated to Goddess Meenakshi (Parvati) and her consort Lord Sundareswarar (Shiva). Famous for its stunning architecture with towering gopurams covered in thousands of colorful sculptures.",
      image: "https://images.pexels.com/photos/13519370/pexels-photo-13519370.jpeg?auto=compress&cs=tinysrgb&w=800",
      festivals: ["Meenakshi Tirukalyanam", "Chithirai Festival", "Navarathri"],
      bestTime: "October to March",
      timings: "5:00 AM - 12:30 PM, 4:00 PM - 9:30 PM",
      architecture: "Dravidian architecture with 14 colorful gopurams and 1000-pillar hall",
      legends: "Goddess Meenakshi was born with three breasts, which disappeared when she met Shiva",
      rituals: ["Kalyanam ceremony", "Aarti", "Abhishekam"],
      nearbyAttractions: ["Thirumalai Nayakkar Palace", "Gandhi Memorial Museum", "Alagar Hills"],
      rating: 4.8,
      reviews: 22340,
      coordinates: { lat: 9.9195, lng: 78.1193 }
    },
    {
      id: 6,
      name: "Bodh Gaya - Mahabodhi Temple",
      category: "buddhist",
      state: "Bihar",
      deity: "Buddha",
      established: "3rd Century BCE",
      significance: "Place of Buddha's enlightenment, UNESCO World Heritage Site",
      description: "The Mahabodhi Temple marks the spot where Prince Siddhartha attained enlightenment and became Buddha. The sacred Bodhi Tree and the temple complex attract Buddhist pilgrims from around the world.",
      image: "https://images.pexels.com/photos/8106120/pexels-photo-8106120.jpeg?auto=compress&cs=tinysrgb&w=800",
      festivals: ["Buddha Purnima", "Kalachakra", "Meditation retreats"],
      bestTime: "October to March",
      timings: "5:00 AM - 9:00 PM",
      architecture: "Ancient Indian architecture with pyramidal spire and intricate carvings",
      legends: "Buddha meditated under the Bodhi Tree for 49 days before attaining enlightenment",
      rituals: ["Meditation sessions", "Prayer ceremonies", "Circumambulation"],
      nearbyAttractions: ["80-foot Buddha statue", "Archaeological Museum", "Sujata Village"],
      rating: 4.6,
      reviews: 8750,
      coordinates: { lat: 24.6958, lng: 84.9917 }
    },
    {
      id: 7,
      name: "Jagannath Temple, Puri",
      category: "temples",
      state: "Odisha",
      deity: "Lord Jagannath (Krishna)",
      established: "12th Century CE",
      significance: "One of the Char Dham pilgrimage sites, famous for Rath Yatra",
      description: "This ancient temple is dedicated to Lord Jagannath, a form of Krishna. Famous for its annual Rath Yatra (Chariot Festival), it's one of the most important pilgrimage sites in Hinduism.",
      image: "https://images.pexels.com/photos/7919642/pexels-photo-7919642.jpeg?auto=compress&cs=tinysrgb&w=800",
      festivals: ["Rath Yatra", "Snana Yatra", "Chandan Yatra"],
      bestTime: "October to February",
      timings: "5:00 AM - 12:00 PM, 7:00 PM - 9:00 PM",
      architecture: "Kalinga architecture with towering shikhara and intricate stone carvings",
      legends: "Lord Krishna manifested as Jagannath to fulfill his devotee's wish",
      rituals: ["Mangala Aarti", "Bhoga offering", "Pahandi ritual"],
      nearbyAttractions: ["Puri Beach", "Konark Sun Temple", "Chilika Lake"],
      rating: 4.7,
      reviews: 19850,
      coordinates: { lat: 19.8135, lng: 85.8312 }
    },
    {
      id: 8,
      name: "Somnath Temple",
      category: "temples",
      state: "Gujarat",
      deity: "Lord Shiva",
      established: "Ancient (Current structure: 1951)",
      significance: "First among 12 Jyotirlingas, symbol of resilience",
      description: "The Somnath Temple is the first among the twelve Jyotirlinga shrines of Shiva. Despite being destroyed and rebuilt multiple times, it stands as a symbol of resilience and faith.",
      image: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=800",
      festivals: ["Maha Shivratri", "Kartik Purnima", "Shravan Month celebrations"],
      bestTime: "October to March",
      timings: "6:00 AM - 9:00 PM",
      architecture: "Chalukya style architecture with intricate stone carvings",
      legends: "Moon god Chandra was cursed and later blessed by Shiva here",
      rituals: ["Rudrabhishek", "Aarti", "Pradakshina"],
      nearbyAttractions: ["Somnath Beach", "Bhalka Tirth", "Triveni Sangam"],
      rating: 4.6,
      reviews: 14230,
      coordinates: { lat: 20.8880, lng: 70.4017 }
    }
  ];

  const filteredPlaces = selectedCategory === 'all' 
    ? religiousPlaces 
    : religiousPlaces.filter(place => place.category === selectedCategory);

  const selectedPlaceData = religiousPlaces.find(place => place.id === selectedPlace);

  if (selectedPlace && selectedPlaceData) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Detailed View */}
        <div className="relative">
          {/* Hero Image */}
          <div className="h-96 relative overflow-hidden">
            <img
              src={selectedPlaceData.image}
              alt={selectedPlaceData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            
            {/* Back Button */}
            <button
              onClick={() => setSelectedPlace(null)}
              className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-lg backdrop-blur-md transition-all duration-200"
            >
              ← Back to Places
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{selectedPlaceData.name}</h1>
              <div className="flex items-center gap-4 text-lg">
                <span className="flex items-center gap-1">
                  <MapPin className="h-5 w-5" />
                  {selectedPlaceData.state}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-400" />
                  {selectedPlaceData.rating} ({selectedPlaceData.reviews.toLocaleString()} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Quick Info */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Quick Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-gray-600">Deity/Saint:</span>
                        <p className="text-gray-800">{selectedPlaceData.deity}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Established:</span>
                        <p className="text-gray-800">{selectedPlaceData.established}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Best Time to Visit:</span>
                        <p className="text-gray-800">{selectedPlaceData.bestTime}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-gray-600">Timings:</span>
                        <p className="text-gray-800">{selectedPlaceData.timings}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Architecture:</span>
                        <p className="text-gray-800">{selectedPlaceData.architecture}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">About</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{selectedPlaceData.description}</p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-2">Religious Significance</h3>
                    <p className="text-orange-700 text-sm">{selectedPlaceData.significance}</p>
                  </div>
                </div>

                {/* Legends & Stories */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Legends & Stories</h2>
                  <p className="text-gray-600 leading-relaxed">{selectedPlaceData.legends}</p>
                </div>

                {/* Festivals & Rituals */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Festivals & Rituals</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-gray-700">Major Festivals</h3>
                      <div className="space-y-2">
                        {selectedPlaceData.festivals.map((festival, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-orange-500" />
                            <span className="text-gray-600">{festival}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-gray-700">Daily Rituals</h3>
                      <div className="space-y-2">
                        {selectedPlaceData.rituals.map((ritual, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-teal-500" />
                            <span className="text-gray-600">{ritual}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Actions */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-orange-500 to-teal-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                      <Navigation className="h-5 w-5" />
                      Get Directions
                    </button>
                    <button className="w-full border-2 border-orange-500 text-orange-600 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 flex items-center justify-center gap-2">
                      <Camera className="h-5 w-5" />
                      Virtual Tour
                    </button>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                        <Heart className="h-4 w-4" />
                        Save
                      </button>
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                        <Share2 className="h-4 w-4" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>

                {/* Nearby Attractions */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">Nearby Attractions</h3>
                  <div className="space-y-3">
                    {selectedPlaceData.nearbyAttractions.map((attraction, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        {attraction}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visitor Info */}
                <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
                  <h3 className="text-lg font-bold mb-4 text-blue-800 flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Visitor Guidelines
                  </h3>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>• Dress modestly and remove shoes before entering</li>
                    <li>• Photography may be restricted in certain areas</li>
                    <li>• Maintain silence and respect during prayers</li>
                    <li>• Follow queue systems during peak times</li>
                    <li>• Carry valid ID for security checks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sacred Places of India</h1>
          <p className="text-gray-600">Explore India's spiritual heritage and religious landmarks</p>
        </div>

        {/* Featured Place */}
        <div className="bg-gradient-to-r from-orange-500 to-teal-600 rounded-xl p-8 text-white mb-12 relative overflow-hidden">
          <div className="relative z-10">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              Featured Sacred Place
            </span>
            <h2 className="text-3xl font-bold mb-4">Varanasi - The Eternal City</h2>
            <p className="text-lg mb-6 text-orange-100 max-w-2xl">
              Experience the spiritual capital of India, where the sacred Ganges flows and ancient traditions 
              continue unbroken for thousands of years.
            </p>
            <button
              onClick={() => setSelectedPlace(1)}
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200"
            >
              Explore Varanasi
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
            <img
              src="https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Varanasi"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Places Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-200 cursor-pointer group"
              onClick={() => setSelectedPlace(place.id)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{place.name}</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-600">{place.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {place.state}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    {place.deity}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{place.description}</p>

                {/* Significance Badge */}
                <div className="bg-orange-50 p-3 rounded-lg mb-4">
                  <p className="text-xs text-orange-700 line-clamp-2">{place.significance}</p>
                </div>

                {/* Festivals */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-800 mb-2">Major Festivals:</h4>
                  <div className="flex flex-wrap gap-1">
                    {place.festivals.slice(0, 2).map((festival, index) => (
                      <span key={index} className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">
                        {festival}
                      </span>
                    ))}
                    {place.festivals.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        +{place.festivals.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{place.reviews.toLocaleString()} reviews</span>
                  <span className="text-orange-600 hover:text-orange-700 font-medium">
                    Learn More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
            Load More Sacred Places
          </button>
        </div>
      </div>
    </div>
  );
};