import {useMemo, useState} from 'react';
import { useCombobox } from 'downshift'
import axios from 'axios';
import debounce from 'lodash.debounce';

import Airport from '../types/airport';


const AirportsSearch = () => {
  const [airports, setAirports] = useState<Airport[]>([])
    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      getItemProps,
    } = useCombobox({
      id: 'airports-search',
      items: airports,
      itemToString: (airport: Airport) => airport.name,
      onInputValueChange: ({ inputValue }) => {
        if(!inputValue) {
          setAirports([]);
          return;
        }
        
        fetchAirportsSuggestionsDebounced(inputValue)
      },
    })


  const fetchAirportsSuggestions = (query: string) => {
    axios
      .get<Airport[]>("/api/airports", {params: {q: query}})
      .catch((err) => err.response)  // TODO: handle this properly in prod
      .then((response) => {
        setAirports(response.data);
      });
  }

  const fetchAirportsSuggestionsDebounced = useMemo(() => debounce(fetchAirportsSuggestions, 300), [])

  return (
    <div>
        <label {...getLabelProps()}>Choose an airport:</label>
        <div {...getComboboxProps()}>
          <input {...getInputProps()} className="w-full p-2 mt-1 border border-black" />
          <button
            type="button"
            {...getToggleButtonProps()}
            aria-label="toggle menu"
            className="hidden"
            aria-hidden
          >
            Search
          </button>
        </div>
        <ul {...getMenuProps()}>
          {isOpen &&
            airports.map((airport, index) => (
              <li
                key={`${airport}${index}`}
                {...getItemProps({ item: airport, index })}
              >
                <a
                  href={`/airports/${airport.iata.toLowerCase()}`}
                  key={airport.iata}
                  className="flex items-center shadow p-2 border hover:bg-gray-200"
                >
                  <div>
                    {airport.name}, {airport.city}
                  </div>
                  <div className="ml-auto text-mono">{airport.country}</div>
                </a>
              </li>
            ))}
        </ul>
      </div>
  );
}

export default AirportsSearch;
