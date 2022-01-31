import react from 'react'
import Wave from 'react-wavify'
import Image from 'next/image'
import trackMovies from 'components/assets/trackmovies.svg'
import addToFavorutes from 'components/assets/addToFavouriets.svg'
import rating from 'components/assets/rate.svg'

const Features = () => {
  return (
    <div className='bg-gradient-to-r from-gradient1l to-gradient1r relative -top-2'>
      <div className='flex items-center justify-around mx-10 md:mx-5 mb-20 flex-col md:flex-row text-center md:text-left'>
        <div className='md:w-1/2'>
          <div className='border-t-4 border-dark w-32 md:w-52 m-auto md:m-0'></div>
          <h3 className='font-kanit font-bold text-white text-4xl pb-3 pt-2'>Track Your Watched Movies</h3>
          <p className='font-kanit text-white text-xl pb-10 md:pb-0 md:mr-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam suspendisse scelerisque viverra semper felis,
            duis turpis. Elit lacus proin nibh at.
          </p>
        </div>
        <Image src={trackMovies} width='280' height='210' ca />
      </div>

      <div className='flex items-center justify-around  mx-10 md:mx-5 md:mb-20 flex-col md:flex-row-reverse text-center md:text-right'>
        <div className='md:w-1/2 md:flex md:flex-col md:items-end'>
          <div className='border-t-4 border-dark w-32 md:w-52 m-auto md:m-0'></div>
          <h3 className='font-kanit font-bold text-white text-4xl pb-3 pt-2'>Add To Favourites</h3>
          <p className='font-kanit text-white text-xl pb-10 md:pb-0 md:ml-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam suspendisse scelerisque viverra semper felis,
            duis turpis. Elit lacus proin nibh at.
          </p>
        </div>
        <Image src={addToFavorutes} width='350' height='203' />
      </div>

      <div className='flex items-center justify-around mx-10 md:mx-5 md:mb-20 flex-col md:flex-row text-center md:text-left'>
        <div className='md:w-1/2'>
          <div className='border-t-4 border-dark w-32 md:w-52 m-auto md:m-0'></div>
          <h3 className='font-kanit font-bold text-white text-4xl pb-3 pt-2'>Rate Your Watched Movies</h3>
          <p className='font-kanit text-white text-xl pb-10 md:pb-0 md:mr-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam suspendisse scelerisque viverra semper felis,
            duis turpis. Elit lacus proin nibh at.
          </p>
        </div>
        <Image src={rating} width='350' height='186' />
      </div>
      <Wave
        className='bg-gradient-to-r from-gradient1l to-gradient1r  relative top-3'
        fill='url(#gradient1)'
        options={{
          height: 20,
          amplitude: 40,
          speed: 0.15,
          points: 3
        }}
      >
        <defs>
          <linearGradient id='gradient1'>
            <stop offset='0%' stopColor='#00F5A0' />
            <stop offset='100%' stopColor='#00D9F5' />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  )
}

export default Features
