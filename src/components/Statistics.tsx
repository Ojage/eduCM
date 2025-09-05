import React from 'react';
import { BarChart3, Users, School, Award } from 'lucide-react';
import { useSchools } from '../hooks/useSchools';

const Statistics: React.FC = () => {
  const { getStatistics } = useSchools();
  const stats = getStatistics();

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <BarChart3 className="h-8 w-8 mr-3 text-blue-600" />
            Education Statistics
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive overview of educational institutions across Cameroon
          </p>
        </div>

        {/* Total Schools */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8 text-center">
          <School className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-4xl font-bold text-gray-900 mb-2">{stats.total}</h3>
          <p className="text-xl text-gray-600">Total Schools in Directory</p>
        </div>

        {/* By Education Level */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 mr-2 text-green-600" />
              By Education Level
            </h3>
            <div className="space-y-4">
              {stats.byLevel.map(({ level, count }) => (
                <div key={level} className="flex items-center justify-between">
                  <span className="text-gray-700">{level}</span>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-200 rounded-full h-2 w-32">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(count / stats.total) * 100}%` }}
                      ></div>
                    </div>
                    <span className="font-medium text-gray-900 w-8 text-right">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* By Ownership */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-purple-600" />
              By Ownership Type
            </h3>
            <div className="space-y-4">
              {stats.byOwnership.map(({ ownership, count }) => (
                <div key={ownership} className="flex items-center justify-between">
                  <span className="text-gray-700">{ownership}</span>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-200 rounded-full h-2 w-32">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(count / stats.total) * 100}%` }}
                      ></div>
                    </div>
                    <span className="font-medium text-gray-900 w-8 text-right">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-600 text-white rounded-lg p-6 text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <School className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Comprehensive Coverage</h4>
            <p className="text-blue-100">All education levels from nursery to university</p>
          </div>
          
          <div className="bg-green-600 text-white rounded-lg p-6 text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Detailed Filtering</h4>
            <p className="text-green-100">Search by region, level, ownership, and more</p>
          </div>
          
          <div className="bg-purple-600 text-white rounded-lg p-6 text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Verified Information</h4>
            <p className="text-purple-100">Accurate and up-to-date school data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;