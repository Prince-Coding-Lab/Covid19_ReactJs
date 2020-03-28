import useStats from '../utils/useStats';
import Stats from './Stats';
import { useState } from 'react';

export default function Country() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('IN');
  if (!countries) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  let list = Object.entries(countries.countries)
    .map(([country, code]) => code)
    .filter(Boolean);
  return (
    <div className='countrystat'>
      <h2>{selectedCountry} Stat</h2>
      <label>
        <select
          defaultValue='IND'
          onChange={e => {
            setSelectedCountry(e.target.value);
          }}
        >
          {list.map((item, index) => (
            <option key={index} value={item.iso3}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${
          selectedCountry === 'KOR' ? 'Korea, South' : selectedCountry
        }`}
      />
    </div>
  );
}
