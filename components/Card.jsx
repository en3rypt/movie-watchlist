import Image from 'next/image'
import logo from 'components/assets/mymovielist.svg'
import parse from 'html-react-parser'
import Link from 'next/link'

const Card = props => {
  return (
    <div className='flex rounded-xl  sm:rounded-none h-[30vh] sm:h-[60vh]' onClick={console.log('clicked')}>
      <div className='p-10  flex-col shrink-0 max-w-[400px] bg-black hidden sm:flex'>
        <h1 className='text-white font-kanit text-3xl font-bold '>{props.title}</h1>
        <h3 className='text-white font-kanit text-xl '>{props.releaseDate.slice(0, 4)}</h3>
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
