import React from 'react';
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

function StudentIDCard({
  name,
  studentId,
  course,
  dateOfBirth,
  address,
  photo,
  schoolLogo,
  schoolName
}) {
  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="h-48 bg-blue-500 relative">
        <img src={schoolLogo} alt="School Logo" className="absolute bottom-2 right-2 h-16 w-16 rounded-full border-2 border-white object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center">
          <img src={photo} alt="Student" className="h-24 w-24 rounded-full border-4 border-blue-300 object-cover mr-4" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">{name}</h2>
            <p className="text-gray-600"><User className="inline-block h-4 w-4 mr-1" /> {studentId}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-700"><span className="font-semibold">Course:</span> {course}</p>
          <p className="text-gray-700"><span className="font-semibold"><Calendar className="inline-block h-4 w-4 mr-1" /> Date of Birth:</span> {format(new Date(dateOfBirth), 'MMMM dd, yyyy')}</p>
          <p className="text-gray-700"><span className="font-semibold">Address:</span> {address}</p>
        </div>

        <div className="mt-6 border-t pt-4 text-center">
          <p className="text-sm text-gray-500">{schoolName}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentIDCard;
