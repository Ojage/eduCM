import React from 'react';
import { MapPin, Phone, Mail, Globe, Users, Calendar, Award, Building2 } from 'lucide-react';
import { School, EducationLevel, OwnershipType } from '../types/school';

interface SchoolCardProps {
  school: School;
  onClick: (school: School) => void;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ school, onClick }) => {
  const getLevelColor = (level: EducationLevel) => {
    switch (level) {
      case EducationLevel.NURSERY:
        return 'bg-pink-100 text-pink-800';
      case EducationLevel.PRIMARY:
        return 'bg-blue-100 text-blue-800';
      case EducationLevel.GENERAL_SECONDARY:
        return 'bg-green-100 text-green-800';
      case EducationLevel.TECHNICAL_VOCATIONAL:
        return 'bg-orange-100 text-orange-800';
      case EducationLevel.UNIVERSITY:
        return 'bg-purple-100 text-purple-800';
      case EducationLevel.HIGHER_INSTITUTE:
        return 'bg-indigo-100 text-indigo-800';
      case EducationLevel.TEACHER_TRAINING:
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getOwnershipColor = (ownership: OwnershipType) => {
    switch (ownership) {
      case OwnershipType.PUBLIC:
        return 'bg-emerald-100 text-emerald-800';
      case OwnershipType.PRIVATE:
        return 'bg-blue-100 text-blue-800';
      case OwnershipType.CONFESSIONAL:
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-gray-200 hover:border-blue-300"
      onClick={() => onClick(school)}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
              {school.name}
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(school.level)}`}>
                {school.level}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getOwnershipColor(school.ownership)}`}>
                {school.ownership}
              </span>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2 text-gray-600 mb-3">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm">
            {school.town}, {school.division}, {school.region}
          </span>
        </div>

        {/* Description */}
        {school.description && (
          <p className="text-gray-700 text-sm mb-4 line-clamp-2">
            {school.description}
          </p>
        )}

        {/* Programs */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {school.programs.slice(0, 3).map((program, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {program}
              </span>
            ))}
            {school.programs.length > 3 && (
              <span className="text-gray-500 text-xs px-2 py-1">
                +{school.programs.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
          {school.establishedYear && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>Est. {school.establishedYear}</span>
            </div>
          )}
          {school.studentsCount && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              <span>{school.studentsCount.toLocaleString()} students</span>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100">
          {school.phone && (
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Phone className="h-3 w-3" />
              <span className="truncate">{school.phone}</span>
            </div>
          )}
          {school.email && (
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Mail className="h-3 w-3" />
              <span className="truncate">{school.email}</span>
            </div>
          )}
          {school.website && (
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Globe className="h-3 w-3" />
              <span className="truncate">{school.website}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;