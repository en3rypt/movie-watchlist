import { useState, useEffect } from 'react'
import SmallCard from 'components/SmallCard'

const MovieRow = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch(props.url)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results)
      })
  }, [])

  return (
    <div className=''>
      <h3 className='text-primary text-kanit font-black text-center sm:text-left text-xl sm:text-2xl sm:pl-16 mt-10'>
        {props.title}
      </h3>
      <div className=' flex overflow-x-auto scrollbar-hide items-start  justify-center'>
        {movies.map(movie => (
          <SmallCard
            key={movie.id}
            id={movie.id}
            path={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            title={movie.title}
            rating={movie.vote_average}
            releaseDate={movie.release_date}
            genre_ids={movie.genre_ids}
          />
        ))}
      </div>
    </div>
  )
}
export default MovieRow
