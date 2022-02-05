import { useEffect, useState } from 'react'
import Navbar from 'components/Navbar'
import Card from 'components/Card'
import { Transition } from '@headlessui/react'
import MovieRow from 'components/MovieRow'
import MOVIE_API, { NOW_PLAYING_API } from 'components/API'

const Explore = () => {
  const [nowPlaying, setNowPlaying] = useState([])
  const [showing, setShowing] = useState(0)
  const [tDirection, setTDirection] = useState(true)

  useEffect(() => {
    fetch(NOW_PLAYING_API)
      .then(res => res.json())
      .then(data => {
        setNowPlaying(data.results)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div className='flex my-6 mx-4 sm:mx-0'>
        <button
          className=' self-center mx-6 hidden sm:block '
          onClick={() => {
            setTDirection(false)
            setShowing(s => (s + nowPlaying.length - 1) % nowPlaying.length)
          }}
        >
          <svg width='19' height='36' viewBox='0 0 19 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M18 35L1 18L18 1' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          </svg>
        </button>
        {nowPlaying.map((movie, index) => (
          <Transition
            className='shrink-0 grow overflow-hidden'
            show={showing === index}
            enter={`transition-transform duration-300 ease-in-out ${tDirection ? 'origin-right' : 'origin-left'}`}
            enterFrom={`${tDirection ? '-translate-x-32' : 'translate-x-32'}`}
            enterTo='translate-x-0'
            leave={`transition-transform duration-300 ease-in-out ${!tDirection ? 'origin-right' : 'origin-left'}`}
            leaveFrom='translate-x-0'
            leaveTo={`${!tDirection ? '-translate-x-32' : 'translate-x-32'}`}
          >
            <Card
              key={movie.id}
              path={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              title={movie.original_title}
              overview={movie.overview}
              rating={movie.vote_average}
              releaseDate={movie.release_date}
              genre_ids={movie.genre_ids}
            />
          </Transition>
        ))}
        <button
          className='self-center mx-6 hidden sm:block '
          onClick={() => {
            setTDirection(true)
            setShowing(s => (s + 1) % nowPlaying.length)
          }}
        >
          <svg width='19' height='36' viewBox='0 0 19 36' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 1L18 18L1 35' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          </svg>
        </button>
      </div>
      {MOVIE_API.map(([title, url]) => (
        <MovieRow title={title} url={url} />
      ))}
    </div>
  )
}

export default Explore
