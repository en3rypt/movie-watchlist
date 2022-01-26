import react from 'react'
import Wave from 'react-wavify'
import Image from 'next/image'
import mainpageimg from 'components/assets/main.svg'
const MainPage = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-around flex-col md:flex-row text-center md:text-left'>
        <div className='mx-5 h-[88vh] md:h-full flex flex-col text-center justify-center md:justify-start md:text-left'>
          <h4 className='font-kanit text-xl'>WELCOME TO MY MOVIE LIST</h4>
          <h1 className='font-kanit font-bold text-primary text-5xl  md:text-5xl lg:text-6xl'>
            Lorem ipsum dolor sit.
          </h1>
          <div className='mt-10 flex justify-between flex-col  items-center sm:flex-row sm:justify-center md:justify-start'>
            <button className='text-white bg-primary border border-blue-500 rounded font-kanit text-2xl sm:text-3xl px-6 py-2   sm:mr-5'>
              Sign Up
            </button>
            <button className='text-primary bg-transparent border border-blue-500  rounded font-kanit  text-2xl sm:text-3xl mt-3 sm:mt-0 px-7 py-2 hover:text-white hover:border-transparent hover:bg-primary transition-all duration-100'>
              Sign In
            </button>
          </div>
        </div>
        <div className='mx-10 md:mx-0 md:mr-10'>
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
            <stop offset='0%' stopColor='#00D2FF' />
            <stop offset='100%' stopColor='#3A7BD5' />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  )
}

export default MainPage
