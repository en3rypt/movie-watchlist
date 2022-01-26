import react from 'react'
import Wave from 'react-wavify'
import email from 'components/assets/email.svg'
import Image from 'next/image'
import github from 'components/assets/github-brands.svg'
import facebook from 'components/assets/facebook-brands.svg'
import instagram from 'components/assets/instagram-brands.svg'
import twitter from 'components/assets/twitter-brands.svg'
const ConstantSourceNode = () => {
  return (
    <div className='bg-gradient-to-r from-gradient2l to-gradient2r p-0 relative -top-2 '>
      <div className='flex justify-center'>
        <div>
          <h5 className='font-kanit text-primary text-4xl pb-3'>Contact Information</h5>
          <p className='font-kanit font-light w-80'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </p>
          <div className='flex py-6'>
            <Image src={email} height='24' width='24' />
            <p className='pl-3 font-kanit font-light'>work@mlist.com</p>
          </div>
          <div className='flex'>
            <div className='pr-10'>
              <Image src={github} height='24' width='24' />
            </div>
            <div className='pr-10'>
              <Image src={facebook} height='24' width='24' />
            </div>
            <div className='pr-10'>
              <Image src={instagram} height='24' width='24' />
            </div>
            <div className='pr-10'>
              <Image src={twitter} height='24' width='24' />
            </div>
          </div>
        </div>
        <div className='border-l-2 border-black h-auto mx-10'></div>
        <div>
          <form action=''>
            <h3 className='font-kanit text-primary text-4xl pb-3'>Send Us A Message</h3>
            <div className='flex pt-3'>
              <div>
                <h6 className='font-kanit'>First Name</h6>
                <input className='rounded shadow-inner outline-none p-1 w-64 mr-10' type='text' />
              </div>
              <div>
                <h6 className='font-kanit'>Last Name</h6>
                <input className='rounded shadow-inner outline-none p-1 w-64' type='text' />
              </div>
            </div>
            <div className='flex pt-3'>
              <div>
                <h6 className='font-kanit'>Email</h6>
                <input className='rounded shadow-inner outline-none p-1 w-64 mr-10' type='email' />
              </div>
              <div>
                <h6 className='font-kanit'>Phone</h6>
                <input className='rounded shadow-inner outline-none p-1 w-64' type='text' />
              </div>
            </div>

            <div className='pt-3'>
              <h6 className='font-kanit'>Subject</h6>
              <input className='rounded shadow-inner outline-none p-1 w-full' type='text' />
            </div>

            <div className='pt-3'>
              <h6 className='font-kanit'>Message</h6>
              <textarea className='rounded shadow-inner outline-none p-1 w-full resize-none mb-3' />
            </div>
            <button className='text-white float-right bg-primary rounded font-kanit px-3 py-1 text-xl  transition-all duration-100'>
              Submit
            </button>
          </form>
        </div>
      </div>
      <Wave
        className='bg-gradient-to-r from-gradient2l to-gradient2r  relative top-3'
        fill='url(#gradient2)'
        options={{
          height: 20,
          amplitude: 40,
          speed: 0.15,
          points: 3
        }}
      >
        <defs>
          <linearGradient id='gradient2'>
            <stop offset='0%' stopColor='#00D2FF' />
            <stop offset='100%' stopColor='#3A7BD5' />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  )
}

export default ConstantSourceNode
