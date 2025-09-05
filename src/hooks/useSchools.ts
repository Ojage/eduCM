import { useState, useMemo } from 'react';
import { School, SearchFilters, EducationLevel, OwnershipType } from '../types/school';
import { mockSchools } from '../data/mockSchools';

export const useSchools = () => {
  const [schools] = useState<School[]>(mockSchools);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    level: '',
    ownership: '',
    region: '',
    division: '',
    town: ''
  });

  const filteredSchools = useMemo(() => {
    return schools.filter(school => {
      const matchesQuery = !filters.query || 
        school.name.toLowerCase().includes(filters.query.toLowerCase()) ||
        school.programs.some(program => 
          program.toLowerCase().includes(filters.query.toLowerCase())
        ) ||
        school.description?.toLowerCase().includes(filters.query.toLowerCase());

      const matchesLevel = !filters.level || school.level === filters.level;
      const matchesOwnership = !filters.ownership || school.ownership === filters.ownership;
      const matchesRegion = !filters.region || school.region === filters.region;
      const matchesDivision = !filters.division || school.division === filters.division;
      const matchesTown = !filters.town || school.town === filters.town;

      return matchesQuery && matchesLevel && matchesOwnership && 
             matchesRegion && matchesDivision && matchesTown;
    });
  }, [schools, filters]);

  const updateFilters = (newFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      query: '',
      level: '',
      ownership: '',
      region: '',
      division: '',
      town: ''
    });
  };

  const getSchoolById = (id: string): School | undefined => {
    return schools.find(school => school.id === id);
  };

  const getStatistics = () => {
    const total = schools.length;
    const byLevel = Object.values(EducationLevel).map(level => ({
      level,
      count: schools.filter(school => school.level === level).length
    }));
    const byOwnership = Object.values(OwnershipType).map(ownership => ({
      ownership,
      count: schools.filter(school => school.ownership === ownership).length
    }));

    return { total, byLevel, byOwnership };
  };

  return {
    schools: filteredSchools,
    filters,
    updateFilters,
    clearFilters,
    getSchoolById,
    getStatistics,
    totalResults: filteredSchools.length
  };
};