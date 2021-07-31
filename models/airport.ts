import {matchSorter} from 'match-sorter'

import airports from "../data/airports.json";
import Airport from "../types/airport";

const FILTERED_AIRPORTS_LIMIT = 10;


export const findAirportByIata = async (
  iata: string
): Promise<Airport | undefined> => {
  return airports.find((airport) => airport.iata === iata.toUpperCase());
};

export const allAirports = async (): Promise<Airport[]> => {
  return airports;
};

export const fetchFilteredAirports = async (query):Promise<Airport[]> => {
  return matchSorter(airports, query, {keys: ['name', 'iata', 'city', 'country']}).slice(0, FILTERED_AIRPORTS_LIMIT);
};
