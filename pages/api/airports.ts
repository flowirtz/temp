import { NextApiRequest, NextApiResponse } from "next";

import { allAirports, fetchFilteredAirports } from "../../models/airport";

interface AirportsApiRequest extends NextApiRequest {
  query: {
    q?: string;
    [key: string]: string | string[];
  };
}

export default async (req: AirportsApiRequest, res: NextApiResponse) => {
  // GET /api/airports
  if (!req.query.q) {
    const airports = await allAirports();
    return res.status(200).json(airports);
  }

  // GET /api/airports?q=London
  const filteredAirports = await fetchFilteredAirports(req.query.q);
  return res.status(200).json(filteredAirports);
};
