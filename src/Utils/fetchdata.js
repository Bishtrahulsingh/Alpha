export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const fetchdata = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export default fetchdata;
