import Image from 'next/image'
import logo from 'components/assets/mymovielist.svg'
import parse from 'html-react-parser'
import Link from 'next/link'

const Card = props => {
  const genres_list = [
    {
      id: 28,
      name: 'Action'
    },
    {
      id: 12,
      name: 'Adventure'
    },
    {
      id: 16,
      name: 'Animation'
    },
    {
      id: 35,
      name: 'Comedy'
    },
    {
      id: 80,
      name: 'Crime'
    },
    {
      id: 99,
      name: 'Documentary'
    },
    {
      id: 18,
      name: 'Drama'
    },
    {
      id: 10751,
      name: 'Family'
    },
    {
      id: 14,
      name: 'Fantasy'
    },
    {
      id: 36,
      name: 'History'
    },
    {
      id: 27,
      name: 'Horror'
    },
    {
      id: 10402,
      name: 'Music'
    },
    {
      id: 9648,
      name: 'Mystery'
    },
    {
      id: 10749,
      name: 'Romance'
    },
    {
      id: 878,
      name: 'Science Fiction'
    },
    {
      id: 10770,
      name: 'TV Movie'
    },
    {
      id: 53,
      name: 'Thriller'
    },
    {
      id: 10752,
      name: 'War'
    },
    {
      id: 37,
      name: 'Western'
    }
  ]

  return (
    <div className='flex rounded-xl  sm:rounded-none h-[30vh] sm:h-[60vh]' onClick={console.log('clicked')}>
      <div className='p-10  flex-col shrink-0 max-w-[400px] bg-black hidden sm:flex'>
        <h1 className='text-white font-kanit text-3xl font-bold '>{props.title}</h1>
        <div className='flex justify-start items-center'>
          <h3 className='text-white font-kanit text-xl '>{props.releaseDate.slice(0, 4)}</h3>
          <div className='rounded text-white bg-primary mx-3 px-1 flex items-center'>
            <span className='text-xs mt-0.5'>{props.rating}</span>
            <span className='pl-2'>
              <svg width='14' height='14' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6.25762 1L7.88223 4.29127L11.5152 4.82229L8.88643 7.38275L9.50683 11L6.25762 9.29127L3.00841 11L3.62881 7.38275L1 4.82229L4.63302 4.29127L6.25762 1Z'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </span>
          </div>
        </div>
        <div className='flex justify-start items-center'>
          {props.genre_ids.map(id => {
            return (
              <div className='bg-white rounded text-kanit text-xs px-1 mt-3 mr-2'>
                {genres_list.find(genre => genre.id === id).name}
              </div>
            )
          })}
        </div>
        {/* <h3 className='text-white pt-5 pb-2'>Over View</h3> */}
        <p className='text-white  pt-5 font-knait text-sm font-extralight'>
          {props.overview.length > 354
            ? parse(`${props.overview.slice(0, 354)}...<Link to="/"><a >Read More</a><Link>`)
            : props.overview}
        </p>
      </div>
      <div className='relative grow'>
        <div className='absolute bottom-2 left-2 w-5/6 sm:w-1/2 z-[2] sm:hidden'>
          <h1 className='text-white font-kanit text-xl font-bold '>{props.title}</h1>
          <h3 className='text-white font-kanit text-sm '>{props.releaseDate.slice(0, 4)}</h3>
        </div>
        <div className='absolute top-0 bottom-0 left-0 sm:-left-1  bg-gradient-to-t sm:bg-gradient-to-r   from-black h-full z-[1]  w-full sm:w-1/2'></div>
        <Image src={props.path} layout='fill' objectFit='cover' />
      </div>
    </div>
  )
}

export default Card
