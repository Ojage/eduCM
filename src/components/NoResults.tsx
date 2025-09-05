import React from 'react';
import { Search, Filter, MapPin } from 'lucide-react';

interface NoResultsProps {
  onClearFilters: () => void;
}

const NoResults: React.FC<NoResultsProps> = ({ onClearFilters }) => {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="h-12 w-12 text-gray-400" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          No schools found
        </h3>
        
        <p className="text-gray-600 mb-8">
          We couldn't find any schools matching your search criteria. 
          Try adjusting your filters or search terms.
        </p>
        
        <div className="space-y-4">
          <button
            onClick={onClearFilters}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 mx-auto"
          >
            <Filter className="h-4 w-4" />
            <span>Clear all filters</span>
          </button>
          
          <div className="text-sm text-gray-500">
            <p className="mb-2">Try searching for:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-100 px-3 py-1 rounded-full">School names</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Programs</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Locations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoResults;