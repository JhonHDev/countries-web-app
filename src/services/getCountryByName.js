export const getCountryByName = async (name) => {
  try {
    const resp = await fetch(`https://restcountries.com/v2/name/${name}`);

    if (!resp.ok) {
      throw new Error('The request was not completed');
    }

    return await resp.json();
  } catch (error) {
    return error;
  }
};
