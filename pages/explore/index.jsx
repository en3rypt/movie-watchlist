import { useEffect, useState } from 'react'
import Navbar from 'components/Navbar'
import Card from 'components/Card'
import Slider from 'react-slick'
import Image from 'next/image'
import { Transition } from '@headlessui/react'

const LATEST_API =
  'https://api.themoviedb.org/3/movie/now_playing?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&page=1'
const POPULAR_API =
  'https://api.themoviedb.org/3/movie/popular?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&page=1'

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props
//   console.log(className, style)
//   return <div className='  -translate-y-1/2 h-2 w-2 bg-black' onClick={onClick} />
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props
//   return <div className={className} style={{ ...style, display: 'block', background: 'black' }} onClick={onClick}></div>
// }
const Explore = () => {
  const [nowPlaying, setNowPlaying] = useState([])
  const [popular, setPopular] = useState([])
  const [showing, setShowing] = useState(0)
  const [tDirection, setTDirection] = useState(true)
  // const settings = {
  //   dots: false,
  //   fade: false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3500,
  //   pauseOnHover: true,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />
  // }

  useEffect(() => {
    fetch(LATEST_API)
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
      {/* <Slider {...settings} className='mt-5 mx-16 bg-black rounded-xl '>
        {nowPlaying.map(movie => (
          <Card
            key={movie.id}
            path={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            title={movie.original_title}
            overview={movie.overview}
            rating={movie.vote_average}
            releaseDate={movie.release_date}
          />
        ))}
        
      </Slider> */}
    </div>
  )
}

export default Explore
