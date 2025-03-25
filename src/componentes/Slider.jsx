import { useState, useEffect } from 'react';
import CityFilter from './CityFilter';

export default function CitiesList() {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch("http://localhost:8080/api/cities/all");
      const data = await response.json();
      setCities(data.response);
      setFilteredCities(data.response);
    };

    fetchCities();
  }, []);

  const handleFilter = (searchTerm) => {
    const filtered = cities.filter(city => 
      city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <CityFilter cities={cities} onFilter={handleFilter} />
      
      {filteredCities.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCities.map((city) => (
            <div key={city._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{city.name}</h2>
                <p className="text-gray-600 text-sm line-clamp-2">{city.description}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {city.country}
                  </span>
                  <span className="text-sm text-gray-500">{city.continent}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No cities were found that match your search.</p>
        </div>
      )}
    </div>
  );
}