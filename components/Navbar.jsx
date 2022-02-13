import react, { useState } from 'react'
import logo from 'components/assets/mymovielist.svg'
import Image from 'next/image'
import Link from 'next/link'
import SidePanel from './SidePanel'
const Navbar = () => {
  const [isMobilePanelOpen, setIsOpen] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [isSearch, setIsSearch] = useState(false)
  return (
    <div className='w-full  shadow-xl flex justify-between items-center px-4'>
      <div className='flex items-center justify-start'>
        <Link href='/' className='hover:cursor-pointer'>
          <a>
            <Image src={logo} height='50' width='50' />
          </a>
        </Link>
        <div className='pl-2 hidden lg:flex'>
          <Link href='/comingsoon'>
            <a href='#' className='text-primary font-kanit text-lg px-4'>
              My List
            </a>
          </Link>
          <Link href='/comingsoon'>
            <a href='#' className='text-primary font-kanit text-lg px-4'>
              Favourites
            </a>
          </Link>
          <Link href='/comingsoon'>
            <a href='#' className='text-primary font-kanit text-lg px-4'>
              Wishlist
            </a>
          </Link>
          <Link href='/explore'>
            <a className='text-primary font-kanit text-lg px-4'>Explore</a>
          </Link>
        </div>
      </div>

      <div className=' items-center flex'>
        <div className='item-center flex'>
          <div className='flex mr-3'>
            <button className=' flex xs:hidden inset-y-0 left-0 items-center pl-3 ' onClick={() => setIsSearch(true)}>
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z'
                  stroke='#000000'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M19 18.9999L14.65 14.6499'
                  stroke='#000000'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <div className=' relative mr-0 md:mr-0 xs:block hidden '>
              <button
                className=' flex xs:absolute inset-y-0 left-0 items-center pl-3 '
                onClick={() => console.log('clicked')}
              >
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z'
                    stroke='#000000'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M19 18.9999L14.65 14.6499'
                    stroke='#000000'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>

              <input
                type='text'
                id='email-adress-icon'
                className=' block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-text-primary sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search...'
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
              />
            </div>
          </div>

          <div className='hidden sm:flex'>
            <div className='border-l-[0.8px] border-secondary h-8'></div>
            <button className='text-primary font-kanit text-lg px-3 py-1 mx-1'>Sign In</button>
            <button className='text-primary bg-transparent border border-blue-500 mx-1 rounded font-kanit px-3 py-1 text-lg hover:text-white hover:border-transparent hover:bg-primary transition-all duration-100'>
              Sign Up
            </button>
          </div>
        </div>
        <button className='block lg:hidden pl-2' onClick={() => setIsOpen(true)}>
          <svg xmlns='http://www.w3.org/2000/svg' height='30px' viewBox='0 0 24 24' width='30px' fill='#0099ff'>
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z' />
          </svg>
        </button>
      </div>
      <div className={`z-[21] absolute top-0 left-0 h-screen w-full bg-white ${isSearch ? 'block' : 'hidden'}`}>
        <div className=' relative mt-6 mx-6'>
          <button className=' absolute left-3 top-3' onClick={() => setIsSearch(false)}>
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M15 8H1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M8 15L1 8L8 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </button>
          <input
            type='text'
            id='email-adress-icon'
            className=' block p-2 px-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-black text-sm '
            placeholder='Search...'
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
          />
          <button className=' absolute top-3 right-3 ' onClick={() => setSearchText('')}>
            <svg width='16' height='16' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M13 1L1 13' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M1 1L13 13' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </button>
        </div>
      </div>
      <SidePanel show={isMobilePanelOpen} onBackdropClick={() => setIsOpen(false)}>
        <div className='m-5 flex justify-between items-center'>
          <Link href='/'>
            <a
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <Image src={logo} height='50' width='50' />
            </a>
          </Link>
          <button className='' onClick={() => setIsOpen(false)}>
            <svg width='20' height='20' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M13 1L1 13' stroke='#0099ff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M1 1L13 13' stroke='#0099ff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </button>
        </div>
        <div className='flex flex-col '>
          <Link href='/comingsoon'>
            <a
              onClick={() => {
                setIsOpen(false)
              }}
              href='#'
              className='text-black font-kanit text-lg px-4 my-3'
            >
              My List
            </a>
          </Link>
          <Link href='/comingsoon'>
            <a
              onClick={() => {
                setIsOpen(false)
              }}
              href='#'
              className='text-black font-kanit text-lg px-4 my-3'
            >
              Favourites
            </a>
          </Link>
          <Link href='/comingsoon'>
            <a
              onClick={() => {
                setIsOpen(false)
              }}
              href='#'
              className='text-black font-kanit text-lg px-4 my-3'
            >
              Wishlist
            </a>
          </Link>
          <Link href='/explore'>
            <a
              onClick={() => {
                setIsOpen(false)
              }}
              className='text-black font-kanit text-lg px-4 my-3'
            >
              Explore
            </a>
          </Link>
        </div>
        <div className='flex flex-col items-center mt-4 py-5 border-y-[1px] border-[#eeeeF8]'>
          <button className='text-primary bg-transparent border border-blue-500 mx-1 rounded font-kanit px-3 py-1 text-xl hover:text-white hover:border-transparent hover:bg-primary transition-all duration-100'>
            Sign Up
          </button>
          <button className='text-primary font-kanit text-xl px-3 py-1 mx-1 mt-4'>Sign In</button>
        </div>
      </SidePanel>
    </div>
  )
}

export default Navbar
