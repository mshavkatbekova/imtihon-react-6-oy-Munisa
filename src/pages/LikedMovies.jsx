import React from 'react'
import MoviesList from '../components/MoviesList'
import { useGlobalContext } from '../hooks/useGlobalContext'
import { Result } from 'postcss';

function LikedMovies() {
  const {likedMovies} = useGlobalContext()
  console.log(likedMovies);
  return (
    <>
    <MoviesList data={{results: likedMovies}}/>
    </>
  )
}

export default LikedMovies