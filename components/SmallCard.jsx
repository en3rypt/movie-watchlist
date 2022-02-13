import { CircularProgressbar } from 'react-circular-progressbar'
import Image from 'next/image'
import { useRouter } from 'next/router'

const SmallCard = props => {
  const router = useRouter()
  const percentage = props.rating * 10
  return (
    <div
      className='cursor-pointer relative h-[200px] min-w-[134px]  w-[134px]  mx-5 my-3 rounded-lg shadow-lg '
      onClick={() => router.push(`/explore/${props.id}`)}
    >
      <div className=' hidden  px-2 sm:flex flex-col justify-center items-center transition-all duration-200 absolute hover:opacity-100 top-0 left-0 bg-black bg-opacity-80 opacity-0 w-full h-full rounded-lg z-[1]'>
        <p className='text-white  text-center font-kanit '>{props.title}</p>
        <p className='py-2 text-white text-center font-kanit text-xs font-light'>{props.releaseDate.slice(0, 4)}</p>
        <CircularProgressbar value={percentage} text={`${props.rating}`} className='w-10 h-10' />
      </div>
      <Image src={props.path} width='134' height='200' className='rounded-lg' />
    </div>
  )
}

export default SmallCard
