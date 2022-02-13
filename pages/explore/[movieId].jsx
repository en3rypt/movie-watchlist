import { useRouter } from 'next/router'

const Movie = () => {
  const router = useRouter()
  const movieId = router.query.movieId
  return (
    <div>
      <h1>Movie {movieId}</h1>
    </div>
  )
}

export default Movie
