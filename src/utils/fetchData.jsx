export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "a5bb1d6883msh7455c474d349abap192349jsnea409f433d4d",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};


