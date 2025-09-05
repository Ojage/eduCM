import React, { useRef, useEffect } from 'react';
import { Search, Filter, X, MapPin } from 'lucide-react';
import { SearchFilters as SearchFiltersType, EducationLevel, OwnershipType } from '../types/school';
import { useLocationData } from '../hooks/useLocationData';

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: Partial<SearchFiltersType>) => void;
  onClearFilters: () => void;
  totalResults: number;
  isSearchFocused: boolean;
  setIsSearchFocused: (focused: boolean) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFiltersChange,
  onClearFilters,
  totalResults,
  isSearchFocused,
  setIsSearchFocused
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { 
    regions, 
    selectedRegion, 
    setSelectedRegion, 
    selectedDivision, 
    setSelectedDivision, 
    availableDivisions, 
    availableTowns 
  } = useLocationData();

  useEffect(() => {
    if (isSearchFocused && searchInputRef.current) {
      searchInputRef.current.focus();
      setIsSearchFocused(false);
    }
  }, [isSearchFocused, setIsSearchFocused]);

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setSelectedDivision('');
    onFiltersChange({ region, division: '', town: '' });
  };

  const handleDivisionChange = (division: string) => {
    setSelectedDivision(division);
    onFiltersChange({ division, town: '' });
  };

  const hasActiveFilters = filters.query || filters.level || filters.ownership || 
                          filters.region || filters.division || filters.town;

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search schools, programs, or descriptions..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              value={filters.query}
              onChange={(e) => onFiltersChange({ query: e.target.value })}
            />
          </div>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-4">
          {/* Education Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Education Level</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.level}
              onChange={(e) => onFiltersChange({ level: e.target.value as EducationLevel | '' })}
            >
              <option value="">All Levels</option>
              {Object.values(EducationLevel).map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          {/* Ownership Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ownership</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.ownership}
              onChange={(e) => onFiltersChange({ ownership: e.target.value as OwnershipType | '' })}
            >
              <option value="">All Types</option>
              {Object.values(OwnershipType).map(ownership => (
                <option key={ownership} value={ownership}>{ownership}</option>
              ))}
            </select>
          </div>

          {/* Region */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedRegion}
              onChange={(e) => handleRegionChange(e.target.value)}
            >
              <option value="">All Regions</option>
              {regions.map(region => (
                <option key={region.name} value={region.name}>{region.name}</option>
              ))}
            </select>
          </div>

          {/* Division */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Division</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              value={selectedDivision}
              onChange={(e) => handleDivisionChange(e.target.value)}
              disabled={!selectedRegion}
            >
              <option value="">All Divisions</option>
              {availableDivisions.map(division => (
                <option key={division.name} value={division.name}>{division.name}</option>
              ))}
            </select>
          </div>

          {/* Town */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Town</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              value={filters.town}
              onChange={(e) => onFiltersChange({ town: e.target.value })}
              disabled={!selectedDivision}
            >
              <option value="">All Towns</option>
              {availableTowns.map(town => (
                <option key={town} value={town}>{town}</option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          <div className="flex items-end">
            <button
              onClick={onClearFilters}
              disabled={!hasActiveFilters}
              className="w-full bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <X className="h-4 w-4" />
              <span className="text-sm">Clear</span>
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>
              {totalResults} school{totalResults !== 1 ? 's' : ''} found
              {hasActiveFilters && ' (filtered)'}
            </span>
          </div>
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Show all schools
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;