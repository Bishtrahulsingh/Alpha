export const exerciseOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a8086d1955msh00527861119e54cp1e3b5cjsn7de4db64c2cc',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};


const fetchdata = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export default fetchdata;
