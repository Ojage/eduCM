import React from "react";
import { MapPin, Phone, Mail, Globe, Users, Calendar } from "lucide-react";
import { School, EducationLevel, OwnershipType } from "../types/school";
import cmOutline from "../asseets/images/cm.svg";

interface SchoolCardProps {
  school: School;
  onClick: (school: School) => void;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ school, onClick }) => {
  const getLevelColor = (level: EducationLevel) => {
    switch (level) {
      case EducationLevel.NURSERY:
        return "bg-pink-100 text-pink-800";
      case EducationLevel.PRIMARY:
        return "bg-blue-100 text-blue-800";
      case EducationLevel.GENERAL_SECONDARY:
        return "bg-green-100 text-green-800";
      case EducationLevel.TECHNICAL_VOCATIONAL:
        return "bg-orange-100 text-orange-800";
      case EducationLevel.UNIVERSITY:
        return "bg-purple-100 text-purple-800";
      case EducationLevel.HIGHER_INSTITUTE:
        return "bg-indigo-100 text-indigo-800";
      case EducationLevel.TEACHER_TRAINING:
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getOwnershipColor = (ownership: OwnershipType) => {
    switch (ownership) {
      case OwnershipType.PUBLIC:
        return "bg-emerald-100 text-emerald-800";
      case OwnershipType.PRIVATE:
        return "bg-blue-100 text-blue-800";
      case OwnershipType.CONFESSIONAL:
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div
      className="relative bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden
                 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group cursor-pointer"
      onClick={() => onClick(school)}
    >
      {/* Accent top corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 opacity-80 transform translate-x-6 -translate-y-6 rotate-45"></div>

      {/* Watermark */}
      <img
        src={cmOutline}
        alt="Cameroon outline"
        className="absolute inset-0 w-full h-full opacity-5 object-cover pointer-events-none"
      />

      {/* Card Content */}
      <div className="relative p-6 flex flex-col h-full">
        {/* School Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">
          {school.name}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(
              school.level
            )}`}
          >
            {school.level}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getOwnershipColor(
              school.ownership
            )}`}
          >
            {school.ownership}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2 text-gray-600 mb-3">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm truncate">
            {school.town}, {school.region}
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
            {school.programs.slice(0, 2).map((program, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {program}
              </span>
            ))}
            {school.programs.length > 2 && (
              <span className="text-gray-500 text-xs px-2 py-1">
                +{school.programs.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-100 mt-auto">
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
        <div className="flex flex-wrap gap-4 mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
          {school.phone && (
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span className="truncate">{school.phone}</span>
            </div>
          )}
          {school.email && (
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span className="truncate">{school.email}</span>
            </div>
          )}
          {school.website && (
            <div className="flex items-center space-x-1">
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
