import React, { useState } from 'react';
import { Search, Mic, Camera, Globe, Filter, History } from 'lucide-react';
import { Page } from '../App';

interface SearchInterfaceProps {
  onNavigate: (page: Page) => void;
}

export const SearchInterface: React.FC<SearchInterfaceProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMode, setSearchMode] = useState<'text' | 'voice' | 'image'>('text');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isListening, setIsListening] = useState(false);

  const languages = ['English', 'Hindi', 'Sanskrit', 'Tamil', 'Bengali', 'Telugu', 'Marathi', 'Gujarati'];

  const recentSearches = [
    'Bharatanatyam dance forms',
    'Ramayana manuscripts',
    'Ancient Indian scripts',
    'Festival celebrations',
    'Traditional art techniques'
  ];

  const searchSuggestions = [
    { query: 'Ajanta cave paintings', category: 'Art & Architecture', results: '1,245' },
    { query: 'Vedic rituals and ceremonies', category: 'Rituals & Traditions', results: '896' },
    { query: 'Folk songs of Rajasthan', category: 'Music & Performance', results: '2,103' },
    { query: 'Ancient Sanskrit texts', category: 'Literature & Scripts', results: '3,567' },
    { query: 'Traditional Indian cuisine', category: 'Food & Culture', results: '1,789' },
    { query: 'Diwali celebration traditions', category: 'Festivals', results: '924' }
  ];

  const handleVoiceSearch = () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      setIsListening(false);
      setSearchQuery('Traditional Indian dance forms');
    }, 2000);
  };

  const handleImageUpload = () => {
    // Simulate image upload and processing
    setSearchQuery('Analyzing uploaded artifact...');
    setTimeout(() => {
      setSearchQuery('Ancient bronze sculpture - Chola dynasty');
    }, 1500);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Intelligent Cultural Search</h1>
          <p className="text-gray-600">Discover India's heritage through text, voice, or image queries</p>
        </div>

        {/* Search Mode Selector */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 p-1 rounded-lg flex">
            {[
              { id: 'text', label: 'Text', icon: Search },
              { id: 'voice', label: 'Voice', icon: Mic },
              { id: 'image', label: 'Image', icon: Camera }
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSearchMode(mode.id as 'text' | 'voice' | 'image')}
                className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-200 ${
                  searchMode === mode.id
                    ? 'bg-white text-orange-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <mode.icon className="h-4 w-4" />
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Interface */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
          {searchMode === 'text' && (
            <div>
              <div className="flex gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for cultural artifacts, traditions, stories..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {languages.map((lang) => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                  <Globe className="absolute right-2 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          )}

          {searchMode === 'voice' && (
            <div className="text-center py-8">
              <button
                onClick={handleVoiceSearch}
                className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isListening
                    ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                    : 'bg-orange-500 hover:bg-orange-600'
                }`}
              >
                <Mic className="h-8 w-8 text-white" />
              </button>
              <p className="mt-4 text-gray-600">
                {isListening ? 'Listening... Speak now' : 'Click to start voice search'}
              </p>
              {searchQuery && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Recognized: </p>
                  <p className="font-medium">{searchQuery}</p>
                </div>
              )}
            </div>
          )}

          {searchMode === 'image' && (
            <div className="text-center py-8">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-orange-500 transition-colors cursor-pointer" onClick={handleImageUpload}>
                <Camera className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">Upload an image of cultural artifact, script, or monument</p>
                <p className="text-sm text-gray-500">Drag and drop or click to select</p>
              </div>
              {searchQuery && (
                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-600">AI Analysis Result: </p>
                  <p className="font-medium text-gray-800">{searchQuery}</p>
                </div>
              )}
            </div>
          )}

          {/* Search Button */}
          <div className="flex justify-center mt-6">
            <button 
              className="bg-gradient-to-r from-orange-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              onClick={() => onNavigate('artifacts')}
            >
              Search Cultural Heritage
            </button>
          </div>
        </div>

        {/* Search Suggestions */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Popular Searches */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Filter className="h-5 w-5 text-orange-600" />
              Popular Searches
            </h3>
            <div className="space-y-3">
              {searchSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-3 border border-gray-100 rounded-lg hover:bg-orange-50 hover:border-orange-200 cursor-pointer transition-all duration-200"
                  onClick={() => {
                    setSearchQuery(suggestion.query);
                    onNavigate('artifacts');
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-800">{suggestion.query}</p>
                      <p className="text-sm text-gray-500">{suggestion.category}</p>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {suggestion.results} results
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Searches */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <History className="h-5 w-5 text-teal-600" />
              Recent Searches
            </h3>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="w-full text-left p-2 hover:bg-teal-50 rounded-lg transition-colors duration-200 text-gray-700 hover:text-teal-700"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};