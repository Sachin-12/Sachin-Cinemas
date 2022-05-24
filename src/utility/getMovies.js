import axios from "axios";

const getMovies = async (page = 1, limit = 10) => {
  const options = {
    method: 'GET',
    url: 'https://movies-app1.p.rapidapi.com/api/movies',
    params: { page, limit },
    headers: {
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
      'X-RapidAPI-Key': '5dc4ed3d87msh08d1d466bf06a8cp1c7249jsn75feab6dd978'
    }
  };

  const response = await axios.request(options)
  return response.data
}

export default getMovies