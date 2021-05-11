import { NextPage } from 'next'

import Layout from '../components/layout'
import useApiData from '../hooks/use-api-data'
import Airport from '../types/airport'

const Page: NextPage = () => {
  const airports = useApiData<Airport[]>('/api/airports', [])

  return <Layout>
    <h1 className='text-2xl'>Code Challenge: Airports</h1>

    <h2 className="mt-10 text-xl">All Airports</h2>

    <div>
      {airports.map(airport => (
        <a href={`/airports/${airport.iata.toLowerCase()}`} key={airport.iata} className='mt-5 flex items-center shadow p-5 border'>
          <div>
            {airport.name}, {airport.city}
          </div>
          <div className='ml-auto text-mono'>
            {airport.country}
          </div>
        </a>
      ))}
    </div>
  </Layout>
}

export default Page
