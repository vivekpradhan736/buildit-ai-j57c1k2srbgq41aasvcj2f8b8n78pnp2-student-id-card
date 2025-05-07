import React from 'react';
import StudentIDCard from './components/StudentIDCard';

function App() {
  const studentData = {
    name: 'Jane Doe',
    studentId: '123456789',
    course: 'Computer Science',
    dateOfBirth: '2000-01-01',
    address: '123 Main St, Anytown',
    photo: 'https://archive.org/download/placeholder-image/placeholder-image.jpg',
    schoolLogo: 'https://archive.org/download/placeholder-image/placeholder-image.jpg',
    schoolName: 'University of Learning'
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <StudentIDCard {...studentData} />
    </div>
  );
}

export default App;
