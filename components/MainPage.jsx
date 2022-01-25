import react from 'react'
import Wave from 'react-wavify'
import Image from 'next/image'
import mainpageimg from 'components/assets/main.svg'
const MainPage = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-around '>
        <div className='w-1/2'>
          <h4 className='font-kanit text-xl'>WELCOME TO MOVIE LIST</h4>
          <h1 className='font-kanit font-bold text-primary text-8xl'>Lorem ipsum dolor sit.</h1>
          <div className='mt-10'>
            <button className='text-white bg-primary border border-blue-500 mr-7 rounded font-kanit px-6 py-2 text-3xl  transition-all duration-100'>
              Sign Up
            </button>
            <button className='text-primary bg-transparent border border-blue-500 ml-7 rounded font-kanit px-6 py-2 text-3xl hover:text-white hover:border-transparent hover:bg-primary transition-all duration-100'>
              Sign In
            </button>
          </div>
        </div>
        <div className=''>
          <Image src={mainpageimg} width='500' height='500' />
        </div>
      </div>
      <Wave
        fill='url(#gradient)'
        options={{
          height: 20,
          amplitude: 40,
          speed: 0.15,
          points: 3
        }}
      >
        <defs>
          <linearGradient id='gradient'>
            <stop offset='10%' stopColor='#00D2FF' />
            <stop offset='90%' stopColor='#3A7BD5' />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  )
}

export default MainPage
