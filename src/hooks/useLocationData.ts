import { useState, useMemo } from 'react';
import { regions } from '../data/regions';

export const useLocationData = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');

  const availableDivisions = useMemo(() => {
    if (!selectedRegion) return [];
    const region = regions.find(r => r.name === selectedRegion);
    return region?.divisions || [];
  }, [selectedRegion]);

  const availableTowns = useMemo(() => {
    if (!selectedDivision) return [];
    const region = regions.find(r => r.name === selectedRegion);
    const division = region?.divisions.find(d => d.name === selectedDivision);
    return division?.towns || [];
  }, [selectedRegion, selectedDivision]);

  const resetLocation = () => {
    setSelectedRegion('');
    setSelectedDivision('');
  };

  return {
    regions,
    selectedRegion,
    setSelectedRegion,
    selectedDivision,
    setSelectedDivision,
    availableDivisions,
    availableTowns,
    resetLocation
  };
};