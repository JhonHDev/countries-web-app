export const getAllCountries = async () => {
  try {
    const resp = await fetch('https://restcountries.com/v2/all');

    if (!resp.ok) {
      throw new Error('The request was not completed');
    }

    const data = await resp.json();

    const countries = data.map((country) => {
      const { name, flag, population, region, capital } = country;

      return {
        name,
        flag,
        population,
        region,
        capital,
      };
    });

    return countries;
  } catch (error) {
    return error;
  }
};
