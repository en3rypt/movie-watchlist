import react from 'react'
import logo from 'components/assets/mymovielist.svg'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='w-full  shadow-xl flex justify-between items-center px-4'>
      <Image src={logo} height='60' width='60' className='p-0' />

      <div>
        <a href='#' className='text-primary font-kanit text-xl px-4'>
          My List
        </a>
        <a href='#' className='text-primary font-kanit text-xl px-4'>
          Favourites
        </a>
        <a href='#' className='text-primary font-kanit text-xl px-4'>
          Wishlist
        </a>
        <a href='#' className='text-primary font-kanit text-xl px-4'>
          Explore
        </a>
        <a href='#' className='text-primary font-kanit text-xl px-4'>
          Home
        </a>
      </div>

      <div className='flex items-center'>
        <div className='border-l-[0.8px] border-secondary h-8'></div>
        <button className='text-primary font-kanit text-xl px-3 py-1 mx-1'>Sign In</button>
        <button className='text-primary bg-transparent border border-blue-500 mx-1 rounded font-kanit px-3 py-1 text-xl hover:text-white hover:border-transparent hover:bg-primary transition-all duration-100'>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Navbar
