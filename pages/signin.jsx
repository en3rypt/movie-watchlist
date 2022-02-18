import Image from 'next/image'
import logo from 'components/assets/mymovielist.svg'
import signinImg from 'components/assets/Signin.svg'

import Link from 'next/link'
const signin = () => {
  return (
    <div className='h-screen  w-full  bg-gradient-to-r from-gradient1l to-gradient1r'>
      {/* <Link href='/' className='hover:cursor-pointer'>
        <a>
          <Image src={logo} height='50' width='50' />
        </a>
      </Link> */}
      {/* <h1 className='font-kanit text-5xl font-bold text-white mt-10 mb-5'>My Watch List</h1> */}
      <div className='w-full flex justify-between items-center'>
        <Link href='/' className='hover:cursor-pointer'>
          <a className='p-5 pb-0'>
            <Image src={logo} height='50' width='50' />
          </a>
        </Link>
        <button className='p-5 pb-0'>
          <Link href='/'>
            <svg width='20' height='20' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M13 1L1 13' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              <path d='M1 1L13 13' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </Link>
        </button>
      </div>
      <div className='flex justify-center items-center'>
        <div className='max-w-[930px] max-h-[530px] rounded-2xl shadow-2xl mb-3  xs:mb-10 flex mx-5 xs:mx-10'>
          <div className='hidden md:flex justify-center items-center rounded-l-2xl h-full w-1/2 bg-gradient-to-r from-gradient3l via-gradient3m to-gradient3r '>
            <Image src={signinImg} height='344' width='500' />
          </div>
          <div className='rounded-l-xl md:rounded-l-none rounded-r-xl xs:rounded-r-2xl bg-white h-full w-full md:w-1/2 p-5  xs:p-10 inset-y-0'>
            <h1 className='font-kanit font-bold text-xl xs:text-3xl'>Sign into your account</h1>
            <p className='my-1 font-kanit font-light text-xs xs:text-base'>
              Don't have an account? <a className='font-normal cursor-pointer'>Sign up here</a>
            </p>
            <button className='w-full text-black bg-transparent border border-black  rounded font-kanit text-sm  xs:text-xl  mt-3   py-1 '>
              Continue with Google
            </button>
            <div className='flex justify-center items-center mt-8 mb-4 text-darkGray'>
              <div className='w-1/4 border-[0.05px] border-gray h-0'></div>
              <p className=' text-center font-kanit text-xs xs:text-base font-extralight px-1 py-0'>Or Continue With</p>
              <div className='w-1/4 border-[0.05px] border-gray h-0'></div>
            </div>
            <form>
              <div class='relative z-0 mb-6 group'>
                <input
                  type='email'
                  name='floating_email'
                  class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  for='floating_email'
                  class='font-kanit font-extralight absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Email Address
                </label>
              </div>

              <div class='relative z-0 mb-6 group'>
                <input
                  type='password'
                  name='floating_password'
                  class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  for='floating_password'
                  class='font-kanit font-extralight absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Password
                </label>
              </div>
              <div className='flex items-center justify-between mt-6 mb-10'>
                <div className='flex items-center justify-between'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                  />
                  <label
                    htmlFor='remember-me'
                    className='font-kanit font-light  ml-2 block text-xs xs:text-sm text-gray-900'
                  >
                    Remember me
                  </label>
                </div>

                <div className='text-sm'>
                  <a href='#' className='font-kanit font-light text-xs xs:text-sm text-font'>
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type='submit'
                  className='font-kanit group relative w-full flex justify-center py-2 px-4 border border-transparent text-base xs:text-xl font-normal rounded-md text-white bg-font hover:bg-primary focus:outline-none transition-all duration-300 ease-in-out'
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default signin
