import React from 'react'
import { useQuery } from 'react-query'
import axios from "axios";

import { useStore } from './index';
import styles from '../styles/movies.module.css'
import MovieCard from '../src/components/atoms/MovieCard/MovieCard';

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
      <div className={styles.movieContainer}>

        {moviesData?.results.map(movie => (
          <div className={styles.movieCard} key={movie.uuid} >
            <MovieCard title={movie.title} description={movie.description} image={movie.image} />
          </div>
        ))}
      </div>
    </>
  )
}
export default Movies

export async function getStaticProps() {
  const response = await getMovies()
  return { props: { movies: response } }
}