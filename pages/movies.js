import React from 'react'
import { useQuery } from 'react-query'
import Router from 'next/router';

import { useStore } from './index';
import styles from '../styles/movies.module.css'
import MovieCard from '../src/components/atoms/MovieCard/MovieCard';
import getMovies from '../src/utility/getMovies';
import { Pagination } from '@mui/material';

function Movies(props) {
  const { page, limit, setSelectedMovieId, setPage } = useStore()

  const { data: moviesData, isLoading, isError } = useQuery(['movies', page, limit], () => getMovies(page, limit), {
    initialData: props.movies
  })


  const handleClick = (movieId) => {
    setSelectedMovieId(movieId)
    Router.push(`/movie/${movieId}`)
  }


  return (
    <>
    <Pagination className={styles.pagination} count={moviesData?.total_pages}page={page} limit={limit} onChange={(e, page)=>{
      setPage(page)
    }} />
      
      <div className={styles.movieContainer}>
        {moviesData?.results.map(movie => (
          <div className={styles.movieCard} key={movie.uuid} >
            <MovieCard title={movie.title} description={movie.description} image={movie.image} onClick={() => handleClick(movie._id)} />
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