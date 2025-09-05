import React from 'react';
import { X, MapPin, Phone, Mail, Globe, Users, Calendar, Award, Building2, BookOpen, CheckCircle } from 'lucide-react';
import { School, EducationLevel, OwnershipType } from '../types/school';

interface SchoolModalProps {
  school: School;
  isOpen: boolean;
  onClose: () => void;
}

const SchoolModal: React.FC<SchoolModalProps> = ({ school, isOpen, onClose }) => {
  if (!isOpen) return null;

  const getLevelColor = (level: EducationLevel) => {
    switch (level) {
      case EducationLevel.NURSERY:
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case EducationLevel.PRIMARY:
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case EducationLevel.GENERAL_SECONDARY:
        return 'bg-green-100 text-green-800 border-green-200';
      case EducationLevel.TECHNICAL_VOCATIONAL:
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case EducationLevel.UNIVERSITY:
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case EducationLevel.HIGHER_INSTITUTE:
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case EducationLevel.TEACHER_TRAINING:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getOwnershipColor = (ownership: OwnershipType) => {
    switch (ownership) {
      case OwnershipType.PUBLIC:
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case OwnershipType.PRIVATE:
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case OwnershipType.CONFESSIONAL:
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{school.name}</h2>
            <div className="flex flex-wrap gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(school.level)}`}>
                {school.level}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getOwnershipColor(school.ownership)}`}>
                {school.ownership}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Basic Information */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Building2 className="h-5 w-5 mr-2 text-blue-600" />
                School Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">{school.address}</p>
                    <p className="text-sm text-gray-500">{school.town}, {school.division}, {school.region}</p>
                  </div>
                </div>

                {school.phone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href={`tel:${school.phone}`} className="text-blue-600 hover:underline">
                        {school.phone}
                      </a>
                    </div>
                  </div>
                )}

                {school.email && (
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href={`mailto:${school.email}`} className="text-blue-600 hover:underline">
                        {school.email}
                      </a>
                    </div>
                  </div>
                )}

                {school.website && (
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-900">Website</p>
                      <a href={`https://${school.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {school.website}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-green-600" />
                Statistics
              </h3>
              
              <div className="space-y-4">
                {school.establishedYear && (
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-900">Established</p>
                      <p className="text-gray-600">{school.establishedYear}</p>
                    </div>
                  </div>
                )}

                {school.studentsCount && (
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-900">Students</p>
                      <p className="text-gray-600">{school.studentsCount.toLocaleString()}</p>
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Quick Facts</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• Level: {school.level}</p>
                    <p>• Type: {school.ownership}</p>
                    <p>• Programs: {school.programs.length} available</p>
                    <p>• Facilities: {school.facilities?.length || 0} listed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          {school.description && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About This School</h3>
              <p className="text-gray-700 leading-relaxed">{school.description}</p>
            </div>
          )}

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
              Academic Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {school.programs.map((program, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{program}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities */}
          {school.facilities && school.facilities.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Building2 className="h-5 w-5 mr-2 text-orange-600" />
                Facilities & Infrastructure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {school.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Accreditation */}
          {school.accreditation && school.accreditation.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-yellow-600" />
                Accreditation & Recognition
              </h3>
              <div className="flex flex-wrap gap-2">
                {school.accreditation.map((accr, index) => (
                  <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {accr}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Map Placeholder */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-red-600" />
              Location Map
            </h3>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Interactive map integration</p>
                <p className="text-xs">Coordinates: {school.coordinates.lat}, {school.coordinates.lng}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolModal;