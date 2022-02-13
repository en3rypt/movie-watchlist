import Head from 'next/head'
import Wave from 'react-wavify'
import Image from 'next/image'
import Navbar from 'components/Navbar'
import mainpageimg from 'components/assets/main.svg'
import trackMovies from 'components/assets/trackmovies.svg'
import addToFavorutes from 'components/assets/addToFavouriets.svg'
import rating from 'components/assets/rate.svg'
import email from 'components/assets/email.svg'
import github from 'components/assets/github-brands.svg'
import facebook from 'components/assets/facebook-brands.svg'
import instagram from 'components/assets/instagram-brands.svg'
import twitter from 'components/assets/twitter-brands.svg'

const Home = () => {
  return (
    <>
      <Head>
        <title>My Watch List</title>
      </Head>

      <Navbar />
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
      <div className='bg-gradient-to-r from-gradient1l to-gradient1r relative -top-2'>
        <div className='flex items-center justify-around mx-10 md:mx-5 mb-20 flex-col md:flex-row text-center md:text-left'>
          <div className='md:w-1/2'>
            <div className='border-t-4 border-dark w-32 md:w-52 m-auto md:m-0'></div>
            <h3 className='font-kanit font-bold text-white text-4xl pb-3 pt-2'>Track Your Watched Movies</h3>
            <p className='font-kanit text-white text-xl pb-10 md:pb-0 md:mr-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam suspendisse scelerisque viverra semper
              felis, duis turpis. Elit lacus proin nibh at.
            </p>
          </div>
          <Image src={trackMovies} width='280' height='210' />
        </div>

        <div className='flex items-center justify-around  mx-10 md:mx-5 md:mb-20 flex-col md:flex-row-reverse text-center md:text-right'>
          <div className='md:w-1/2 md:flex md:flex-col md:items-end'>
            <div className='border-t-4 border-dark w-32 md:w-52 m-auto md:m-0'></div>
            <h3 className='font-kanit font-bold text-white text-4xl pb-3 pt-2'>Add To Favourites</h3>
            <p className='font-kanit text-white text-xl pb-10 md:pb-0 md:ml-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam suspendisse scelerisque viverra semper
              felis, duis turpis. Elit lacus proin nibh at.
            </p>
          </div>
          <Image src={addToFavorutes} width='350' height='203' />
        </div>

        <div className='flex items-center justify-around mx-10 md:mx-5 md:mb-20 flex-col md:flex-row text-center md:text-left'>
          <div className='md:w-1/2'>
            <div className='border-t-4 border-dark w-32 md:w-52 m-auto md:m-0'></div>
            <h3 className='font-kanit font-bold text-white text-4xl pb-3 pt-2'>Rate Your Watched Movies</h3>
            <p className='font-kanit text-white text-xl pb-10 md:pb-0 md:mr-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam suspendisse scelerisque viverra semper
              felis, duis turpis. Elit lacus proin nibh at.
            </p>
          </div>
          <Image src={rating} width='350' height='186' />
        </div>
        <Wave
          className='bg-gradient-to-r from-gradient1l to-gradient1r  relative top-3'
          fill='url(#gradient1)'
          options={{
            height: 20,
            amplitude: 40,
            speed: 0.15,
            points: 3
          }}
        >
          <defs>
            <linearGradient id='gradient1'>
              <stop offset='0%' stopColor='#00F5A0' />
              <stop offset='100%' stopColor='#00D9F5' />
            </linearGradient>
          </defs>
        </Wave>
      </div>

      <div className='bg-gradient-to-r from-gradient2l to-gradient2r p-0 relative -top-2 '>
        <div className='flex justify-center items-center text-center md:text-left md:items-start flex-col-reverse md:flex-row md:just mx-10'>
          <div className='pt-12 md:pt-0 flex flex-col items-center md:items-start'>
            <h5 className='font-kanit text-primary text-4xl pb-3'>Contact Information</h5>
            <p className='font-kanit font-light w-fit'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </p>
            <div className='flex py-6'>
              <Image src={email} height='24' width='24' />
              <p className='pl-3 font-kanit font-light'>work@mlist.com</p>
            </div>
            <div className='flex'>
              <div className='px-3 md:pl-0 md:pr-10 '>
                <Image src={github} height='24' width='24' />
              </div>
              <div className='px-3 md:pl-0 md:pr-10'>
                <Image src={facebook} height='24' width='24' />
              </div>
              <div className='px-3 md:pl-0 md:pr-10'>
                <Image src={instagram} height='24' width='24' />
              </div>
              <div className='px-3 md:pl-0 md:pr-10'>
                <Image src={twitter} height='24' width='24' />
              </div>
            </div>
          </div>
          <div className='md:border-l-2 md:border-black md:h-96  md:mx-10 '></div>
          <div>
            <form action=''>
              <h3 className='font-kanit text-primary text-4xl pb-3'>Send Us A Message</h3>
              <div className='flex pt-3 sm:justify-between flex-col sm:flex-row'>
                <div className='sm:pr-10'>
                  <h6 className='font-kanit'>First Name</h6>
                  <input className='rounded shadow-inner outline-none p-1 w-full ' type='text' />
                </div>
                <div>
                  <h6 className='font-kanit pt-3 sm:pt-0'>Last Name</h6>
                  <input className='rounded shadow-inner outline-none p-1 w-full' type='text' />
                </div>
              </div>
              <div className='flex pt-3 sm:justify-between flex-col sm:flex-row'>
                <div className='sm:pr-10'>
                  <h6 className='font-kanit pt-3 sm:pt-0'>Email</h6>
                  <input className='rounded shadow-inner outline-none p-1 w-full ' type='email' />
                </div>
                <div>
                  <h6 className='font-kanit pt-3 sm:pt-0'>Phone</h6>
                  <input className='rounded shadow-inner outline-none p-1 w-full' type='text' />
                </div>
              </div>

              <div className='pt-3'>
                <h6 className='font-kanit pt-3 sm:pt-0'>Subject</h6>
                <input className='rounded shadow-inner outline-none p-1 w-full' type='text' />
              </div>

              <div className='pt-3'>
                <h6 className='font-kanit pt-3 sm:pt-0'>Message</h6>
                <textarea className=' rounded shadow-inner outline-none p-1 w-full resize-none mb-3' />
              </div>
              <button className='text-white float-none sm md:float-right bg-primary rounded font-kanit px-3 py-1 text-xl  transition-all duration-100'>
                Submit
              </button>
            </form>
          </div>
        </div>
        <Wave
          className='bg-gradient-to-r from-gradient2l to-gradient2r  relative top-4'
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

      <div className='bg-gradient-to-r from-gradient1l to-gradient1r absolute w-full'>
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
    </>
  )
}

export default Home
