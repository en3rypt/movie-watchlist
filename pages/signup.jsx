import Image from 'next/image'
import logo from 'components/assets/mymovielist.svg'
import signupImg from 'components/assets/Signup.svg'

import Link from 'next/link'
const signup = () => {
  return (
    <div className=' h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-gradient1l to-gradient1r'>
      {/* <Link href='/' className='hover:cursor-pointer'>
        <a>
          <Image src={logo} height='50' width='50' />
        </a>
      </Link> */}
      <h1 className='font-kanit text-5xl font-bold text-white mt-10 mb-5'>My Watch List</h1>
      <div className='w-screen md:w-[930px] h-[530px] rounded-2xl shadow-2xl mb-10 flex'>
        <div className='hidden md:flex justify-center items-center rounded-l-2xl h-full w-1/2 bg-gradient-to-r from-gradient3l via-gradient3m to-gradient3r '>
          <Image src={signupImg} height='344' width='500' />
        </div>
        <div className='rounded-r-2xl bg-white h-full w-1/2 p-10 inset-y-0'>
          <h1 className='text-center font-kanit font-bold text-3xl'>Create Account</h1>
          <p className='text-center my-1 font-kanit font-light text-base'>Enter Your Information To Register</p>
          <button className='w-full text-black bg-transparent border border-black  rounded font-kanit  text-xl  mt-3   py-1 '>
            Sign Up with Google
          </button>
          <div className='flex justify-center items-center mt-8 mb-4 text-darkGray'>
            <div className='w-1/3 border-[0.05px] border-gray h-0'></div>
            <p className='font-kanit font-extralight px-1 py-0'>Or Sign Up With</p>
            <div className='w-1/3 border-[0.05px] border-gray h-0'></div>
          </div>
          <form>
            <div className='flex flex-row'>
              <div class='relative z-0 mb-6 group'>
                <input
                  type='text'
                  name='floating_firstname'
                  class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  for='floating_firsntname'
                  class='font-kanit font-extralight absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  First Name
                </label>
              </div>
              <div class='relative z-0 mb-6 group ml-3'>
                <input
                  type='lastname'
                  name='floating_lastname'
                  class='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  for='floating_lastname'
                  class='font-kanit font-extralight absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Last Name
                </label>
              </div>
            </div>
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

            <div>
              <button
                type='submit'
                className='font-kanit group relative w-full flex justify-center py-2 px-4 border border-transparent text-xl font-normal rounded-md text-white bg-font hover:bg-primary focus:outline-none transition-all duration-300 ease-in-out'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default signup
