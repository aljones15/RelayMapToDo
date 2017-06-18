import { FetchCities } from './database.js';

describe("should", () => {
  it("return 3 cities", () => {
    const cities = FetchCities();
    expect(cities.length).toBe(3);
  })
})
