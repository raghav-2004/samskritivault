import React, { useState } from 'react';
import { Code, Database, Brain, Cloud, Smartphone, Globe, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Page } from '../App';

interface DevelopmentPlanProps {
  onNavigate: (page: Page) => void;
}

export const DevelopmentPlan: React.FC<DevelopmentPlanProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'mvp' | 'tech-stack' | 'roadmap'>('architecture');

  const tabs = [
    { id: 'architecture', label: 'Architecture', icon: Code },
    { id: 'mvp', label: 'MVP Plan', icon: CheckCircle },
    { id: 'tech-stack', label: 'Tech Stack', icon: Database },
    { id: 'roadmap', label: 'Roadmap', icon: Calendar }
  ] as const;

  const techStack = {
    frontend: [
      { name: 'React 18', purpose: 'UI Framework', icon: '⚛️' },
      { name: 'TypeScript', purpose: 'Type Safety', icon: '🔷' },
      { name: 'Tailwind CSS', purpose: 'Styling', icon: '🎨' },
      { name: 'Vite', purpose: 'Build Tool', icon: '⚡' }
    ],
    backend: [
      { name: 'Node.js', purpose: 'Runtime Environment', icon: '🟢' },
      { name: 'Express.js', purpose: 'API Framework', icon: '🚀' },
      { name: 'MongoDB', purpose: 'Document Database', icon: '🍃' },
      { name: 'Redis', purpose: 'Caching & Sessions', icon: '🔴' }
    ],
    ai: [
      { name: 'TensorFlow.js', purpose: 'Client-side ML', icon: '🧠' },
      { name: 'OpenAI GPT-4', purpose: 'NLP & Generation', icon: '🤖' },
      { name: 'Google Vision API', purpose: 'Image Recognition', icon: '👁️' },
      { name: 'Azure Speech Services', purpose: 'ASR/TTS', icon: '🎤' }
    ],
    infrastructure: [
      { name: 'AWS/Azure', purpose: 'Cloud Hosting', icon: '☁️' },
      { name: 'Docker', purpose: 'Containerization', icon: '🐳' },
      { name: 'Elasticsearch', purpose: 'Search Engine', icon: '🔍' },
      { name: 'CDN (Cloudflare)', purpose: 'Content Delivery', icon: '🌐' }
    ]
  };

  const mvpFeatures = [
    {
      category: 'Core Search',
      features: ['Text-based search', 'Basic filters', 'Simple categorization'],
      priority: 'High',
      timeline: 'Week 1',
      status: 'Ready'
    },
    {
      category: 'Content Management',
      features: ['Artifact viewer', 'Basic metadata', 'Image gallery'],
      priority: 'High',
      timeline: 'Week 2',
      status: 'In Progress'
    },
    {
      category: 'AI Integration',
      features: ['Image recognition', 'Basic OCR', 'Simple recommendations'],
      priority: 'Medium',
      timeline: 'Week 3',
      status: 'Planned'
    },
    {
      category: 'User Experience',
      features: ['Responsive design', 'Basic authentication', 'Bookmarking'],
      priority: 'Medium',
      timeline: 'Week 4',
      status: 'Planned'
    }
  ];

  const architectureComponents = [
    {
      layer: 'Presentation Layer',
      components: ['React Frontend', 'Mobile App (React Native)', 'Admin Dashboard'],
      color: 'bg-blue-100 border-blue-300 text-blue-800'
    },
    {
      layer: 'API Gateway',
      components: ['Authentication', 'Rate Limiting', 'Request Routing', 'Load Balancing'],
      color: 'bg-green-100 border-green-300 text-green-800'
    },
    {
      layer: 'Microservices',
      components: ['Search Service', 'AI Processing', 'Content Management', 'User Service'],
      color: 'bg-purple-100 border-purple-300 text-purple-800'
    },
    {
      layer: 'AI/ML Services',
      components: ['OCR Pipeline', 'Image Recognition', 'NLP Processing', 'Recommendation Engine'],
      color: 'bg-orange-100 border-orange-300 text-orange-800'
    },
    {
      layer: 'Data Layer',
      components: ['MongoDB (Primary)', 'Elasticsearch (Search)', 'Redis (Cache)', 'File Storage (S3)'],
      color: 'bg-gray-100 border-gray-300 text-gray-800'
    }
  ];

  const roadmapPhases = [
    {
      phase: 'MVP (0-2 months)',
      items: [
        'Basic web application with search',
        'Simple content management',
        'User authentication',
        'Core AI features (OCR, basic recognition)'
      ],
      status: 'current'
    },
    {
      phase: 'Beta (2-6 months)',
      items: [
        'Mobile application',
        'Advanced AI features',
        'Multi-language support',
        'Virtual tours (basic)',
        'API for third parties'
      ],
      status: 'next'
    },
    {
      phase: 'Production (6-12 months)',
      items: [
        'Full AI suite deployment',
        'Scalable infrastructure',
        'Advanced analytics',
        'Institution partnerships',
        'AR/VR integration'
      ],
      status: 'future'
    },
    {
      phase: 'Scale (12+ months)',
      items: [
        'National deployment',
        'International expansion',
        'Advanced machine learning',
        'Blockchain preservation',
        'IoT integration'
      ],
      status: 'future'
    }
  ];

  const renderArchitecture = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">System Architecture</h2>
        <p className="text-gray-600">Microservices-based architecture designed for scalability and performance</p>
      </div>
      
      <div className="space-y-4">
        {architectureComponents.map((layer, index) => (
          <div key={index} className="relative">
            <div className={`border-2 rounded-lg p-6 ${layer.color}`}>
              <h3 className="font-bold text-lg mb-4">{layer.layer}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                {layer.components.map((component, idx) => (
                  <div key={idx} className="bg-white/70 px-3 py-2 rounded-md text-sm font-medium">
                    {component}
                  </div>
                ))}
              </div>
            </div>
            {index < architectureComponents.length - 1 && (
              <div className="flex justify-center my-2">
                <div className="w-px h-8 bg-gray-300"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-bold mb-4">Key Architectural Decisions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Microservices Benefits</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Independent deployment and scaling</li>
              <li>• Technology diversity for optimal performance</li>
              <li>• Fault isolation and resilience</li>
              <li>• Team autonomy and faster development</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Data Strategy</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• MongoDB for flexible document storage</li>
              <li>• Elasticsearch for full-text search</li>
              <li>• Redis for high-performance caching</li>
              <li>• S3-compatible storage for media files</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMVP = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">MVP Development Plan</h2>
        <p className="text-gray-600">Minimum Viable Product for hackathon and early validation</p>
      </div>

      <div className="grid gap-6">
        {mvpFeatures.map((feature, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{feature.category}</h3>
                <p className="text-sm text-gray-600">{feature.timeline}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  feature.priority === 'High' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {feature.priority}
                </span>
                <span className={`flex items-center gap-1 text-sm ${
                  feature.status === 'Ready' 
                    ? 'text-green-600' 
                    : feature.status === 'In Progress'
                    ? 'text-blue-600'
                    : 'text-gray-600'
                }`}>
                  {feature.status === 'Ready' && <CheckCircle className="h-4 w-4" />}
                  {feature.status === 'In Progress' && <Clock className="h-4 w-4" />}
                  {feature.status === 'Planned' && <AlertCircle className="h-4 w-4" />}
                  {feature.status}
                </span>
              </div>
            </div>
            <ul className="space-y-2">
              {feature.features.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-orange-800 mb-4">Hackathon Strategy (24-48 hours)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-orange-700 mb-2">Day 1 Focus</h4>
            <ul className="text-sm text-orange-600 space-y-1">
              <li>• Set up basic React application</li>
              <li>• Create core components and routing</li>
              <li>• Implement search interface</li>
              <li>• Basic data integration</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-700 mb-2">Day 2 Focus</h4>
            <ul className="text-sm text-orange-600 space-y-1">
              <li>• Add AI features (demo version)</li>
              <li>• Implement artifact viewer</li>
              <li>• Polish UI/UX</li>
              <li>• Prepare presentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTechStack = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
        <p className="text-gray-600">Modern, scalable technologies chosen for performance and developer experience</p>
      </div>

      {Object.entries(techStack).map(([category, technologies]) => (
        <div key={category} className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold capitalize mb-6 text-gray-800 flex items-center gap-2">
            {category === 'frontend' && <Smartphone className="h-6 w-6 text-blue-600" />}
            {category === 'backend' && <Database className="h-6 w-6 text-green-600" />}
            {category === 'ai' && <Brain className="h-6 w-6 text-purple-600" />}
            {category === 'infrastructure' && <Cloud className="h-6 w-6 text-orange-600" />}
            {category}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{tech.icon}</span>
                  <h4 className="font-semibold text-gray-800">{tech.name}</h4>
                </div>
                <p className="text-sm text-gray-600">{tech.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-blue-800 mb-4">Additional Considerations</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-blue-700 mb-2">Performance</h4>
            <ul className="text-blue-600 space-y-1">
              <li>• CDN for global content delivery</li>
              <li>• Image optimization and lazy loading</li>
              <li>• Service worker for offline access</li>
              <li>• Database indexing strategies</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 mb-2">Security</h4>
            <ul className="text-blue-600 space-y-1">
              <li>• OAuth 2.0 authentication</li>
              <li>• Data encryption at rest and transit</li>
              <li>• API rate limiting and CORS</li>
              <li>• Regular security audits</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 mb-2">Monitoring</h4>
            <ul className="text-blue-600 space-y-1">
              <li>• Application performance monitoring</li>
              <li>• Error tracking and alerting</li>
              <li>• User analytics and behavior</li>
              <li>• Infrastructure monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRoadmap = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Development Roadmap</h2>
        <p className="text-gray-600">Strategic phases for scaling from MVP to national platform</p>
      </div>

      <div className="relative">
        {roadmapPhases.map((phase, index) => (
          <div key={index} className="relative">
            <div className={`border-2 rounded-lg p-6 mb-8 ${
              phase.status === 'current' 
                ? 'bg-orange-50 border-orange-300' 
                : phase.status === 'next'
                ? 'bg-blue-50 border-blue-300'
                : 'bg-gray-50 border-gray-300'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                  phase.status === 'current' 
                    ? 'bg-orange-500' 
                    : phase.status === 'next'
                    ? 'bg-blue-500'
                    : 'bg-gray-400'
                }`}>
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{phase.phase}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {phase.items.map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            {index < roadmapPhases.length - 1 && (
              <div className="flex justify-center mb-4">
                <div className="w-px h-8 bg-gray-300"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-green-800 mb-4">Success Metrics</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">User Engagement</h4>
            <ul className="text-sm text-green-600 space-y-1">
              <li>• 10K+ monthly active users</li>
              <li>• 15 min average session duration</li>
              <li>• 70% user retention rate</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Content & Quality</h4>
            <ul className="text-sm text-green-600 space-y-1">
              <li>• 100K+ cultural artifacts</li>
              <li>• 95% AI accuracy rate</li>
              <li>• 22 Indian languages supported</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Institutional Adoption</h4>
            <ul className="text-sm text-green-600 space-y-1">
              <li>• 50+ museum partnerships</li>
              <li>• 100+ educational institutions</li>
              <li>• Government integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Development Plan & Architecture</h1>
          <p className="text-gray-600">Comprehensive technical blueprint for SamskritiVault platform</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg flex flex-wrap gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-white text-orange-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          {activeTab === 'architecture' && renderArchitecture()}
          {activeTab === 'mvp' && renderMVP()}
          {activeTab === 'tech-stack' && renderTechStack()}
          {activeTab === 'roadmap' && renderRoadmap()}
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('dashboard')}
              className="bg-gradient-to-r from-orange-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              Explore Platform Demo
            </button>
            <button
              onClick={() => window.open('https://github.com', '_blank')}
              className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200"
            >
              View Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentPlan;