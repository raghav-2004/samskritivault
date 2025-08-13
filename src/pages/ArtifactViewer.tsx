import React, { useState } from 'react';
import { Eye, Heart, Share2, MapPin, Calendar, Book, Zap } from 'lucide-react';
import { Page } from '../App';

interface ArtifactViewerProps {
  onNavigate: (page: Page) => void;
}

export const ArtifactViewer: React.FC<ArtifactViewerProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', label: 'All Categories', count: 1247 },
    { id: 'manuscripts', label: 'Manuscripts', count: 234 },
    { id: 'sculptures', label: 'Sculptures', count: 189 },
    { id: 'paintings', label: 'Paintings', count: 156 },
    { id: 'textiles', label: 'Textiles', count: 98 },
    { id: 'jewelry', label: 'Jewelry', count: 87 },
    { id: 'instruments', label: 'Instruments', count: 76 }
  ];

  const artifacts = [
    {
      id: 1,
      title: "Rigveda Palm Leaf Manuscript",
      category: "manuscripts",
      region: "Kerala",
      period: "16th Century CE",
      description: "Ancient Sanskrit text written on palm leaves using traditional iron stylus technique.",
      image: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600",
      aiInsights: "Contains 45 hymns with unique regional annotations. Script analysis reveals South Indian Grantha influence.",
      culturalSignificance: "Sacred text preserving Vedic knowledge through oral and written tradition.",
      likes: 234,
      views: 1567
    },
    {
      id: 2,
      title: "Nataraja Bronze Sculpture",
      category: "sculptures",
      region: "Tamil Nadu",
      period: "Chola Dynasty (11th Century)",
      description: "Iconic representation of Shiva as the cosmic dancer, masterpiece of Indian metallurgy.",
      image: "https://images.pexels.com/photos/8106120/pexels-photo-8106120.jpeg?auto=compress&cs=tinysrgb&w=600",
      aiInsights: "Lost-wax casting technique with 8 classical dance poses depicted. Bronze composition analysis reveals high tin content.",
      culturalSignificance: "Represents the eternal cycle of creation and destruction in Hindu philosophy.",
      likes: 456,
      views: 2834
    },
    {
      id: 3,
      title: "Madhubani Folk Painting",
      category: "paintings",
      region: "Bihar",
      period: "Traditional (Contemporary)",
      description: "Traditional art form featuring natural pigments and intricate geometric patterns.",
      image: "https://images.pexels.com/photos/7289714/pexels-photo-7289714.jpeg?auto=compress&cs=tinysrgb&w=600",
      aiInsights: "Color analysis shows use of natural pigments: turmeric, indigo, and vermillion. Pattern recognition identifies 12 traditional motifs.",
      culturalSignificance: "Women's art tradition passed through generations, reflecting rural life and mythology.",
      likes: 189,
      views: 987
    },
    {
      id: 4,
      title: "Kanjeevaram Silk Saree",
      category: "textiles",
      region: "Tamil Nadu",
      period: "Traditional (19th Century)",
      description: "Handwoven silk textile with gold zari work, exemplifying South Indian craftsmanship.",
      image: "https://images.pexels.com/photos/8145291/pexels-photo-8145291.jpeg?auto=compress&cs=tinysrgb&w=600",
      aiInsights: "Thread count analysis reveals 300 threads per inch. Gold content in zari measured at 65% purity.",
      culturalSignificance: "Symbol of prosperity and tradition in South Indian wedding ceremonies.",
      likes: 312,
      views: 1456
    },
    {
      id: 5,
      title: "Rajasthani Miniature Painting",
      category: "paintings",
      region: "Rajasthan",
      period: "18th Century",
      description: "Detailed court painting depicting royal hunting scenes with natural pigments.",
      image: "https://images.pexels.com/photos/7919642/pexels-photo-7919642.jpeg?auto=compress&cs=tinysrgb&w=600",
      aiInsights: "Pigment analysis reveals lapis lazuli, gold leaf, and organic red dyes. Perspective techniques show Persian influence.",
      culturalSignificance: "Represents the zenith of Rajput court art and Indo-Persian cultural synthesis.",
      likes: 267,
      views: 1789
    },
    {
      id: 6,
      title: "Pattachitra Scroll Painting",
      category: "paintings",
      region: "Odisha",
      period: "Traditional (Contemporary)",
      description: "Traditional cloth-based scroll painting depicting stories from Hindu epics.",
      image: "https://images.pexels.com/photos/7919568/pexels-photo-7919568.jpeg?auto=compress&cs=tinysrgb&w=600",
      aiInsights: "Natural binding agents identified. Narrative sequence follows classical Indian storytelling structure.",
      culturalSignificance: "Mobile art form used by traveling storytellers to narrate religious epics.",
      likes: 198,
      views: 1123
    }
  ];

  const filteredArtifacts = selectedCategory === 'all' 
    ? artifacts 
    : artifacts.filter(artifact => artifact.category === selectedCategory);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Cultural Artifact Explorer</h1>
          <p className="text-gray-600">AI-powered analysis and categorization of India's cultural treasures</p>
        </div>

        {/* Filters */}
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

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtifacts.map((artifact) => (
            <div key={artifact.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-200">
              <div className="h-64 overflow-hidden">
                <img
                  src={artifact.image}
                  alt={artifact.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{artifact.title}</h3>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Heart className="h-4 w-4 text-gray-500" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Share2 className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {artifact.region}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    {artifact.period}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{artifact.description}</p>

                {/* AI Insights */}
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">AI Analysis</span>
                  </div>
                  <p className="text-xs text-blue-700 line-clamp-2">{artifact.aiInsights}</p>
                </div>

                {/* Cultural Significance */}
                <div className="bg-orange-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Book className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium text-orange-800">Cultural Context</span>
                  </div>
                  <p className="text-xs text-orange-700 line-clamp-2">{artifact.culturalSignificance}</p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {artifact.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {artifact.views}
                    </span>
                  </div>
                  <button 
                    className="text-orange-600 hover:text-orange-700 font-medium"
                    onClick={() => onNavigate('tours')}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
            Load More Artifacts
          </button>
        </div>
      </div>
    </div>
  );
};