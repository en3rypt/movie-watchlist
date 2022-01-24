import react from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-14 shadow-xl flex justify-between items-center px-4'>
      <div>
        <h1>logo</h1>
      </div>
      <div>
        <a href='#' className='text-primary font-kanit px-4'>
          Latest Movies
        </a>
        <a href='#' className='text-primary font-kanit px-4'>
          up Coming Movies
        </a>
        <a href='#' className='text-primary font-kanit px-4'>
          Search Movies
        </a>
      </div>
      <div>
        <button className='text-primary font-kanit text-xl px-3 py-1 mx-1'>Sign In</button>
        <button className='text-primary bg-transparent border border-blue-500 mx-1 rounded font-kanit px-3 py-1 text-xl hover:text-white hover:border-transparent hover:bg-primary transition-all duration-100'>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Navbar
