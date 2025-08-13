import React, { useState } from 'react';
import { MapPin, Play, VolumeX, Volume2, Maximize2, ArrowLeft, ArrowRight } from 'lucide-react';
import { Page } from '../App';

interface VirtualTourProps {
  onNavigate: (page: Page) => void;
}

export const VirtualTour: React.FC<VirtualTourProps> = ({ onNavigate }) => {
  const [selectedTour, setSelectedTour] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);

  const tours = [
    {
      id: 1,
      title: "Ajanta Caves Virtual Journey",
      location: "Maharashtra",
      duration: "45 min",
      rating: 4.9,
      scenes: 12,
      image: "https://images.pexels.com/photos/9867704/pexels-photo-9867704.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Explore 2000-year-old Buddhist cave paintings and sculptures in stunning 360° detail.",
      highlights: ["Cave 1 - Bodhisattva Paintings", "Cave 2 - Jataka Stories", "Cave 16 - Buddha's Parinirvana"]
    },
    {
      id: 2,
      title: "Hampi Heritage Walk",
      location: "Karnataka",
      duration: "60 min",
      rating: 4.8,
      scenes: 18,
      image: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Journey through the ruins of the Vijayanagara Empire with AR reconstructions.",
      highlights: ["Virupaksha Temple", "Stone Chariot", "Royal Enclosure"]
    },
    {
      id: 3,
      title: "Khajuraho Temple Complex",
      location: "Madhya Pradesh",
      duration: "55 min",
      rating: 4.7,
      scenes: 15,
      image: "https://images.pexels.com/photos/13519370/pexels-photo-13519370.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Marvel at the intricate sculptures and architectural brilliance of medieval India.",
      highlights: ["Kandariya Mahadeva", "Lakshman Temple", "Sculpture Galleries"]
    },
    {
      id: 4,
      title: "Kerala Backwaters Cultural Tour",
      location: "Kerala",
      duration: "40 min",
      rating: 4.9,
      scenes: 10,
      image: "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Experience traditional life along Kerala's waterways with cultural performances.",
      highlights: ["Traditional Houseboat", "Kathakali Performance", "Spice Gardens"]
    }
  ];

  const currentTour = tours.find(tour => tour.id === selectedTour);

  const sceneDescriptions = [
    "Cave entrance with intricate stone carvings",
    "Main hall with ancient Buddhist murals",
    "Meditation chamber with Buddha statue",
    "Detailed view of Bodhisattva paintings"
  ];

  if (selectedTour && currentTour) {
    return (
      <div className="min-h-screen bg-black">
        {/* Virtual Tour Viewer */}
        <div className="relative h-screen">
          {/* Mock 360° Viewer */}
          <div className="w-full h-full bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 relative overflow-hidden">
            <img
              src={currentTour.image}
              alt={currentTour.title}
              className="w-full h-full object-cover opacity-80"
            />
            
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            
            {/* Control Bar */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
              <button
                onClick={() => setSelectedTour(null)}
                className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-lg backdrop-blur-md transition-all duration-200"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              
              <div className="bg-black/50 backdrop-blur-md rounded-lg px-4 py-2 text-white">
                <h2 className="font-semibold">{currentTour.title}</h2>
                <p className="text-sm opacity-75">{currentTour.location}</p>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-lg backdrop-blur-md transition-all duration-200"
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
                <button className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-lg backdrop-blur-md transition-all duration-200">
                  <Maximize2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Scene Navigation */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/50 backdrop-blur-md rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white">
                    <h3 className="font-medium">Scene {currentScene + 1} of {currentTour.scenes}</h3>
                    <p className="text-sm opacity-75">{sceneDescriptions[currentScene] || "Exploring the heritage site"}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentScene(Math.max(0, currentScene - 1))}
                      disabled={currentScene === 0}
                      className="bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-all duration-200"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setCurrentScene(Math.min(currentTour.scenes - 1, currentScene + 1))}
                      disabled={currentScene === currentTour.scenes - 1}
                      className="bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-all duration-200"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentScene + 1) / currentTour.scenes) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Interactive Hotspots (simulated) */}
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-orange-500 w-4 h-4 rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform" />
            </div>
            <div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-teal-500 w-4 h-4 rounded-full animate-pulse cursor-pointer hover:scale-125 transition-transform" />
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Virtual Heritage Tours</h1>
          <p className="text-gray-600">Immersive 360° experiences of India's cultural landmarks</p>
        </div>

        {/* Featured Tour */}
        <div className="bg-gradient-to-r from-orange-500 to-teal-600 rounded-xl p-8 text-white mb-12 relative overflow-hidden">
          <div className="relative z-10">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              Featured Tour
            </span>
            <h2 className="text-3xl font-bold mb-4">Experience Ajanta Caves Like Never Before</h2>
            <p className="text-lg mb-6 text-orange-100 max-w-2xl">
              Step into 2000-year-old Buddhist cave temples with our cutting-edge VR technology. 
              Explore ancient murals and sculptures with expert commentary.
            </p>
            <button
              onClick={() => setSelectedTour(1)}
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 flex items-center gap-2"
            >
              <Play className="h-5 w-5" />
              Start Virtual Tour
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
            <img
              src="https://images.pexels.com/photos/9867704/pexels-photo-9867704.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Ajanta Caves"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Tour Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-200 cursor-pointer group"
              onClick={() => setSelectedTour(tour.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-200" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    {tour.scenes} scenes
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    ★ {tour.rating}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-white/90 p-3 rounded-full">
                    <Play className="h-8 w-8 text-orange-600" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800">{tour.title}</h3>
                  <span className="text-sm text-gray-500">{tour.duration}</span>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {tour.location}
                </div>

                <p className="text-sm text-gray-600 mb-4">{tour.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-800">Tour Highlights:</h4>
                  <ul className="space-y-1">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1 h-1 bg-orange-500 rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Features */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Virtual Tour Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">360° Immersion</h3>
              <p className="text-sm text-gray-600">
                Full panoramic views with interactive hotspots and detailed annotations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Volume2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Expert Commentary</h3>
              <p className="text-sm text-gray-600">
                Professional narration in multiple languages with cultural context
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Maximize2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">AR Reconstruction</h3>
              <p className="text-sm text-gray-600">
                See historical sites in their original glory with augmented reality
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};