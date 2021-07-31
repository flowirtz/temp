import { NextPage } from "next";
import AirportsSearch from "../components/airportsSearch";

import Layout from "../components/layout";

const Page: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-2xl mb-8">Code Challenge: Airports</h1>

      <AirportsSearch />
    </Layout>
  );
};

export default Page;
