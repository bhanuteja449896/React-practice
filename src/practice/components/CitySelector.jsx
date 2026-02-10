import { useState } from 'react';

function CitySelector({ selectedCity, onChangeCity }) {
  const cities = ['Hyderabad', 'Mumbai', 'Delhi'];

  return (
    <div>
      <p>Selected: {selectedCity}</p>
      {cities.map(city => (
        <button key={city} onClick={() => onChangeCity(city)}>
          {city}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [selectedCity, setSelectedCity] = useState('Hyderabad');

  return (
    <CitySelector
      selectedCity={selectedCity}
      onChangeCity={setSelectedCity}
    />
  );
}
