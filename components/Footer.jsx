import react from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-gradient1l to-gradient1r relative -top-2'>
      <div className='px-24'>
        <h3 className='font-kanit text-white text-5xl font-light'>
          <span className='font-bold'>Never Miss Out.</span> Sign-up For Our newsletter.
        </h3>
        <input
          placeholder='Enter Email Here'
          className='rounded shadow-inner outline-none p-1 w-80 m-10 ml-0'
          type='text'
        />
        <button className='text-primary  bg-white rounded hover:bg-primary hover:text-white font-kanit px-3 py-1 text-xl  transition-all duration-100'>
          Sign Me Up
        </button>
      </div>
    </div>
  )
}

export default Footer
