import React from 'react'
import { useQuery } from 'react-query'
import axios from "axios";

import { useStore } from './index';
import styles from '../styles/movies.module.css'

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

function Movies(props) {
  const { page, limit } = useStore()

  const { data: moviesData, isLoading, isError } = useQuery(['movies', page, limit], () => getMovies(page, limit), {
    initialData: props.movies
  })

  return (
    <>
      {moviesData?.results.map(movie => (
        <div key={movie.uuid} >
          <p>{movie.title}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={movie.image} alt={movie.title} />
        </div>
      ))}
    </>
  )
}
export default Movies

export async function getStaticProps() {
  const response = await getMovies()
  return { props: { movies: response } }
}