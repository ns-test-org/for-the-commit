'use client';

import { useState } from 'react';

const tofuTypes = [
  {
    name: "Silken Tofu",
    description: "Soft and creamy, perfect for smoothies and desserts",
    uses: ["Smoothies", "Desserts", "Sauces", "Soups"]
  },
  {
    name: "Soft Tofu",
    description: "Delicate texture, great for soups and gentle cooking",
    uses: ["Miso soup", "Steaming", "Braising", "Scrambles"]
  },
  {
    name: "Medium Tofu",
    description: "Versatile texture that holds shape well",
    uses: ["Stir-fries", "Curries", "Grilling", "Baking"]
  },
  {
    name: "Firm Tofu",
    description: "Dense and sturdy, ideal for most cooking methods",
    uses: ["Pan-frying", "Grilling", "Baking", "Marinating"]
  },
  {
    name: "Extra-Firm Tofu",
    description: "Very dense, perfect for high-heat cooking",
    uses: ["Deep-frying", "Grilling", "Stir-frying", "Cubing"]
  }
];

const cookingMethods = [
  {
    name: "Pan-Frying",
    time: "8-10 minutes",
    description: "Creates a golden, crispy exterior while keeping the inside tender",
    steps: [
      "Press tofu to remove excess water",
      "Cut into desired shapes",
      "Heat oil in pan over medium-high heat",
      "Cook 3-4 minutes per side until golden"
    ]
  },
  {
    name: "Baking",
    time: "25-30 minutes",
    description: "Hands-off method that creates evenly cooked, slightly chewy tofu",
    steps: [
      "Preheat oven to 400°F (200°C)",
      "Press and cube tofu",
      "Toss with oil and seasonings",
      "Bake for 25-30 minutes, flipping halfway"
    ]
  },
  {
    name: "Grilling",
    time: "6-8 minutes",
    description: "Adds smoky flavor and beautiful grill marks",
    steps: [
      "Press tofu and slice into thick slabs",
      "Marinate for at least 30 minutes",
      "Preheat grill to medium-high",
      "Grill 3-4 minutes per side"
    ]
  },
  {
    name: "Scrambling",
    time: "5-7 minutes",
    description: "Perfect egg substitute with endless flavor possibilities",
    steps: [
      "Crumble tofu with your hands",
      "Heat oil in pan over medium heat",
      "Add tofu and seasonings",
      "Cook, stirring frequently, until heated through"
    ]
  }
];

export default function TofuCookingGuide() {
  const [activeTab, setActiveTab] = useState('types');
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            🥢 Tofu Cooking Guide
          </h1>
          <p className="text-lg text-green-600">
            Master the art of cooking with tofu - from basics to advanced techniques
          </p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('types')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'types'
                  ? 'bg-green-500 text-white'
                  : 'text-green-600 hover:bg-green-100'
              }`}
            >
              Tofu Types
            </button>
            <button
              onClick={() => setActiveTab('methods')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'methods'
                  ? 'bg-green-500 text-white'
                  : 'text-green-600 hover:bg-green-100'
              }`}
            >
              Cooking Methods
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'types' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tofuTypes.map((tofu, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  {tofu.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tofu.description}
                </p>
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Best for:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tofu.uses.map((use, i) => (
                      <span
                        key={i}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'methods' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {cookingMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedMethod(selectedMethod === index ? null : index)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-green-800">
                      {method.name}
                    </h3>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {method.time}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  
                  {selectedMethod === index && (
                    <div className="border-t pt-4">
                      <h4 className="font-medium text-green-700 mb-3">Step-by-step:</h4>
                      <ol className="space-y-2">
                        {method.steps.map((step, i) => (
                          <li key={i} className="flex items-start">
                            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                              {i + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                  
                  <div className="mt-4 text-center">
                    <span className="text-green-600 text-sm">
                      {selectedMethod === index ? 'Click to collapse' : 'Click for step-by-step instructions'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-12 bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            💡 Pro Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span className="text-gray-700">Always press tofu to remove excess water for better texture</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span className="text-gray-700">Marinate for at least 30 minutes for maximum flavor</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span className="text-gray-700">Freeze tofu overnight for a meatier, chewier texture</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span className="text-gray-700">Use cornstarch coating for extra crispy results</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span className="text-gray-700">Don't overcrowd the pan when frying</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span className="text-gray-700">Store leftover cooked tofu in the fridge for up to 5 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

