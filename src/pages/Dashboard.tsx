import React from 'react';
import { BookOpen, Map, Users, Search, Image, MapPin, Calendar, Award } from 'lucide-react';
import { Page } from '../App';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const modes = [
    {
      id: 'educational',
      title: 'Educational Mode',
      description: 'Interactive learning with quizzes, assignments, and gamified cultural education',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      features: ['Interactive Quizzes', 'Cultural Assignments', 'Progress Tracking', 'Student Analytics']
    },
    {
      id: 'tourist',
      title: 'Tourist Mode',
      description: 'AI-powered itineraries, guides, and heritage site exploration tools',
      icon: Map,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      features: ['Smart Itineraries', 'GPS Navigation', 'Festival Calendar', 'Local Guides']
    },
    {
      id: 'institutional',
      title: 'Institutional Mode',
      description: 'Research tools, bulk access, and collaboration features for organizations',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      features: ['Bulk Data Access', 'Research Tools', 'Archive Management', 'API Access']
    }
  ];

  const quickActions = [
    { title: 'Smart Search', icon: Search, action: () => onNavigate('search') },
    { title: 'Artifact Scanner', icon: Image, action: () => onNavigate('artifacts') },
    { title: 'Sacred Places', icon: MapPin, action: () => onNavigate('religious') },
    { title: 'Virtual Tours', icon: Map, action: () => onNavigate('tours') },
  ];

  const culturalHighlights = [
    {
      title: "Ramayana Manuscripts",
      category: "Epic Literature",
      region: "Pan-Indian",
      image: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Bharatanatyam Heritage",
      category: "Classical Dance",
      region: "Tamil Nadu",
      image: "https://images.pexels.com/photos/8569987/pexels-photo-8569987.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Ajanta Cave Paintings",
      category: "Ancient Art",
      region: "Maharashtra",
      image: "https://images.pexels.com/photos/9867704/pexels-photo-9867704.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Cultural Heritage Dashboard</h1>
          <p className="text-gray-600">Choose your mode or explore cultural treasures</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 group"
            >
              <action.icon className="h-8 w-8 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-sm font-medium text-gray-700">{action.title}</div>
            </button>
          ))}
        </div>

        {/* User Modes */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {modes.map((mode, index) => (
            <div
              key={index}
              className={`${mode.bgColor} p-6 rounded-xl border-2 border-transparent hover:border-gray-300 transition-all duration-200 cursor-pointer group`}
            >
              <div className={`bg-gradient-to-r ${mode.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                <mode.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{mode.title}</h3>
              <p className="text-gray-600 mb-4">{mode.description}</p>
              <ul className="space-y-2">
                {mode.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <Award className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cultural Highlights */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Cultural Highlights</h2>
            <button
              onClick={() => onNavigate('artifacts')}
              className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1"
            >
              View All <Search className="h-4 w-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {culturalHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group"
                onClick={() => onNavigate('artifacts')}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm text-orange-600 font-medium mb-1">{highlight.category}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{highlight.title}</h3>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Map className="h-4 w-4 mr-1" />
                    {highlight.region}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Cultural Insight */}
        <div className="bg-gradient-to-r from-orange-500 to-teal-600 rounded-xl p-6 text-white">
          <div className="flex items-center mb-4">
            <Calendar className="h-6 w-6 mr-2" />
            <h2 className="text-xl font-bold">Today's Cultural Insight</h2>
          </div>
          <h3 className="text-lg font-semibold mb-2">The Significance of Diwali Rangoli Patterns</h3>
          <p className="text-orange-100 mb-4">
            Traditional rangoli designs are not just decorative art but carry deep cultural meanings. 
            Each geometric pattern represents cosmic harmony, prosperity symbols, and invitations to divine energies.
          </p>
          <button
            onClick={() => onNavigate('search')}
            className="bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};