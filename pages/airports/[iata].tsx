import { GetServerSideProps, NextPage } from "next";

import Layout from "../../components/layout";
import { findAirportByIata } from "../../models/airport";
import Airport from "../../types/airport";

interface Props {
  airport: Airport | undefined;
}

const Page: NextPage<Props> = ({ airport }) => {
  return (
    <Layout>
      <h1 className="text-2xl">Airport: {airport.name}</h1>
      <pre className="mt-10 text-gray-500 text-sm">
        {JSON.stringify(airport, undefined, 2)}
      </pre>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { iata } = params;
  const airport = await findAirportByIata(iata.toString());

  return {
    props: {
      airport,
    },
  };
};

export default Page;
