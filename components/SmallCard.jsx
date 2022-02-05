import { CircularProgressbar } from 'react-circular-progressbar'
import Image from 'next/image'
const SmallCard = props => {
  const percentage = props.rating * 10
  return (
    <div className='relative h-[200px] w-[134px]  mx-5 my-3 rounded-lg shadow-lg '>
      <div className=' flex flex-col justify-center items-center transition-all duration-200 absolute hover:opacity-100 top-0 left-0 bg-black bg-opacity-80 opacity-0 w-full h-full rounded-lg z-[1]'>
        <p className='text-white  text-center font-kanit '>{props.title}</p>
        <p className='text-white text-center font-kanit text-xs font-light'>{props.releaseDate.slice(0, 4)}</p>
        <CircularProgressbar value={percentage} text={`${props.rating}`} className='w-10 h-10' />
      </div>
      <Image src={props.path} width='134' height='200' className='rounded-lg' />
    </div>
  )
}

export default SmallCard
