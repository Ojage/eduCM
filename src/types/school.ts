export interface School {
  id: string;
  name: string;
  level: EducationLevel;
  ownership: OwnershipType;
  region: string;
  division: string;
  town: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  programs: string[];
  accreditation: string[];
  establishedYear?: number;
  studentsCount?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  description?: string;
  facilities: string[];
}

export enum EducationLevel {
  NURSERY = 'Nursery',
  PRIMARY = 'Primary',
  GENERAL_SECONDARY = 'General Secondary',
  TECHNICAL_VOCATIONAL = 'Technical & Vocational',
  UNIVERSITY = 'University',
  HIGHER_INSTITUTE = 'Higher Institute',
  TEACHER_TRAINING = 'Teacher Training'
}

export enum OwnershipType {
  PUBLIC = 'Public',
  PRIVATE = 'Private',
  CONFESSIONAL = 'Confessional'
}

export interface SearchFilters {
  query: string;
  level: EducationLevel | '';
  ownership: OwnershipType | '';
  region: string;
  division: string;
  town: string;
}

export interface Region {
  name: string;
  divisions: Division[];
}

export interface Division {
  name: string;
  towns: string[];
}