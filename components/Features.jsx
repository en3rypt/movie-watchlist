import react from 'react'
import Image from 'next/image'
import trackMovies from 'components/assets/trackmovies.svg'
import addToFavorutes from 'components/assets/addToFavouriets.svg'
import rating from 'components/assets/rate.svg'

const Features = () => {
  return (
    <div className='bg-gradient-to-r from-gradient1l to-gradient1r relative -top-2'>
      <div className='flex items-center justify-around mx-5 mb-20'>
        <div className='w-1/2'>
          <div className='border-t-4 border-dark w-52'></div>
          <h3 className='font-kanit font-bold text-white text-4xl pb-3 pt-2'>Track Your Watched Movies</h3>
          <p className='font-kanit text-white text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam suspendisse scelerisque viverra semper felis,
            duis turpis. Elit lacus proin nibh at.
          </p>
        </div>
        <Image src={trackMovies} width='280' height='210' />
      </div>

      <div className='flex items-center justify-around flex-row-reverse mx-5 mb-20'>
        <div className='w-1/2 text-right flex flex-col items-end'>
          <div className='border-t-4 border-dark w-52'></div>
          <h3 className='font-kanit font-bold text-white text-4xl pb-3 pt-2'>Add To Favourites</h3>
          <p className='font-kanit text-white text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam suspendisse scelerisque viverra semper felis,
            duis turpis. Elit lacus proin nibh at.
          </p>
        </div>
        <Image src={addToFavorutes} width='350' height='203' />
      </div>

      <div className='flex items-center justify-around mx-5 mb-20'>
        <div className='w-1/2'>
          <div className='border-t-4 border-dark w-52'></div>
          <h3 className='font-kanit font-bold text-white text-4xl pb-3 pt-2'>Rate Your Watched Movies</h3>
          <p className='font-kanit text-white text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam suspendisse scelerisque viverra semper felis,
            duis turpis. Elit lacus proin nibh at.
          </p>
        </div>
        <Image src={rating} width='400' height='213' />
      </div>
    </div>
  )
}

export default Features
