import React from 'react';
import { ArrowRight, Globe, BookOpen, Mic, Camera, Sparkles, Users, Map } from 'lucide-react';
import { Page } from '../App';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 via-teal-600 to-yellow-600 bg-clip-text text-transparent mb-6">
              SamskritiVault
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              AI-powered platform preserving and showcasing India's rich cultural heritage through 
              intelligent aggregation, multimodal search, and immersive storytelling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('dashboard')}
                className="bg-gradient-to-r from-orange-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200 flex items-center gap-2 justify-center"
              >
                Explore Platform <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => onNavigate('development')}
                className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all duration-200 flex items-center gap-2 justify-center"
              >
                View Development Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Revolutionary Cultural Preservation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-200">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                <Globe className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Multimodal Input</h3>
              <p className="text-gray-600">
                Search using text, voice, or images. Upload artifacts, speak in any Indian language, 
                or type your queries for intelligent cultural exploration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-200">
              <div className="bg-teal-100 p-3 rounded-lg w-fit mb-4">
                <Sparkles className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">AI-Powered Recognition</h3>
              <p className="text-gray-600">
                Advanced OCR, ASR, and computer vision to identify scripts, artifacts, monuments, 
                and cultural elements with contextual information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-200">
              <div className="bg-yellow-100 p-3 rounded-lg w-fit mb-4">
                <BookOpen className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Interactive Storytelling</h3>
              <p className="text-gray-600">
                AI-generated narratives, visual timelines, virtual tours, and 3D visualizations 
                bring cultural heritage to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Modes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Tailored for Every User
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Educational Mode</h3>
              <p className="text-gray-600">
                Student-friendly explanations, interactive quizzes, assignments, and gamified 
                learning experiences for cultural education.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Map className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Tourist Mode</h3>
              <p className="text-gray-600">
                AI-generated itineraries, cultural guides, festival calendars, and GPS navigation 
                for heritage site exploration.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Users className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Institutional Mode</h3>
              <p className="text-gray-600">
                Bulk data access, research tools, archival systems, and collaboration features 
                for museums, universities, and cultural institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-teal-600">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-12">Platform Capabilities</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-orange-100">Cultural Artifacts</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">22+</div>
              <div className="text-orange-100">Indian Languages</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-orange-100">Heritage Sites</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-orange-100">Folk Stories</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};