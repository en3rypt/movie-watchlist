import react from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-gradient1l to-gradient1r relative -top-2'>
      <div className='px-3 sm:px-24 text-center sm:text-left'>
        <h3 className='font-kanit text-white text-2xl sm:text-5xl font-light'>
          <span className='font-bold'>Never Miss Out.</span> Sign-up For Our newsletter.
        </h3>
        <div className='flex flex-col sm:flex-row items-center justify-start pb-10  sm:py-5'>
          <input
            placeholder='Enter Email Here'
            className='rounded shadow-inner outline-none p-1 w-fit  sm:mr-5 my-5 sm:my-0'
            type='text'
          />
          <button className=' text-primary  bg-white rounded hover:bg-primary hover:text-white font-kanit px-3 py-1 text-xl  transition-all duration-100'>
            Sign Me Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
