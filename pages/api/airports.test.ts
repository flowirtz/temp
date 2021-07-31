import {createMocks} from 'node-mocks-http';

import handleAirportsRoute from './airports';


describe('/api/airports', () => {
  test('should return all airports', async () => {
    const {req, res} = createMocks({
      method: "GET",
    });

    await handleAirportsRoute(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toMatchSnapshot();
  })

  test('should return all airports', async () => {
    const {req, res} = createMocks({
      method: "GET",
      query: {
        q: "London",
      }
    });

    await handleAirportsRoute(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData()).length).toBe(10);
    expect(JSON.parse(res._getData())).toMatchSnapshot();
  })
})
