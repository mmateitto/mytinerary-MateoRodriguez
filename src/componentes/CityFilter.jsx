import { useState } from 'react';

export default function CityFilter({ cities, onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilter(value);
  };

  return (
    <div className="max-w-md mx-auto mb-8 bg-red-100">
      <input
        type="text"
        placeholder="Search city..."
        value={searchTerm}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}