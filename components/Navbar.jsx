import react, { useState } from 'react'
import logo from 'components/assets/mymovielist.svg'
import Image from 'next/image'
import Link from 'next/link'
import SidePanel from './SidePanel'
const Navbar = () => {
  const [isMobilePanelOpen, setIsOpen] = useState(false)
  return (
    <div className='w-full  shadow-xl flex justify-between items-center px-4'>
      <Image src={logo} height='60' width='60' className='p-0' />
      <div className='hidden md:block'>
        <Link href='/comingsoon'>
          <a href='#' className='text-primary font-kanit text-xl px-4'>
            My List
          </a>
        </Link>
        <Link href='/comingsoon'>
          <a href='#' className='text-primary font-kanit text-xl px-4'>
            Favourites
          </a>
        </Link>
        <Link href='/comingsoon'>
          <a href='#' className='text-primary font-kanit text-xl px-4'>
            Wishlist
          </a>
        </Link>
        <Link href='/explore'>
          <a className='text-primary font-kanit text-xl px-4'>Explore</a>
        </Link>
        <Link href='/'>
          <a href='#' className='text-primary font-kanit text-xl px-4'>
            Home
          </a>
        </Link>
      </div>
      <button className='block md:hidden' onClick={() => setIsOpen(true)}>
        <svg width='25' height='15' viewBox='0 0 25 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M0 15H25V12.5H0V15ZM0 8.75H25V6.25H0V8.75ZM0 0V2.5H25V0H0Z' fill='#0099FF' />
        </svg>
      </button>
      <SidePanel show={isMobilePanelOpen} onBackdropClick={() => setIsOpen(false)}>
        <button onClick={() => setIsOpen(false)}>X</button>
      </SidePanel>

      <div className=' items-center hidden md:flex'>
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
