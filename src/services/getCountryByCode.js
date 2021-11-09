export const getCountryByCode = async (code) => {
  try {
    const resp = await fetch(`https://restcountries.com/v2/alpha/${code}`);

    if (!resp.ok) {
      throw new Error('The request was not completed');
    }

    const { name } = await resp.json();

    return name;
  } catch (error) {
    return error;
  }
};
