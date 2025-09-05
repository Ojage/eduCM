import React, { useState } from 'react';
import Header from './components/Header';
import SearchFilters from './components/SearchFilters';
import SchoolCard from './components/SchoolCard';
import SchoolModal from './components/SchoolModal';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
import NoResults from './components/NoResults';
import { useSchools } from './hooks/useSchools';
import { School } from './types/school';

function App() {
  const { schools, filters, updateFilters, clearFilters, totalResults } = useSchools();
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSchoolClick = (school: School) => {
    setSelectedSchool(school);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleClearFilters = () => {
    clearFilters();
    setIsSearchFocused(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearchFocus={handleSearchFocus} />
      
      <SearchFilters 
        filters={filters}
        onFiltersChange={updateFilters}
        onClearFilters={handleClearFilters}
        totalResults={totalResults}
        isSearchFocused={isSearchFocused}
        setIsSearchFocused={setIsSearchFocused}
      />

      <main className="container mx-auto px-4 py-8">
        {schools.length === 0 ? (
          <NoResults onClearFilters={handleClearFilters} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {schools.map((school) => (
              <SchoolCard 
                key={school.id} 
                school={school} 
                onClick={handleSchoolClick}
              />
            ))}
          </div>
        )}
      </main>

      <Statistics />
      <Footer />

      {selectedSchool && (
        <SchoolModal
          school={selectedSchool}
          isOpen={!!selectedSchool}
          onClose={() => setSelectedSchool(null)}
        />
      )}
    </div>
  );
}

export default App;