import Head from 'next/head'
import Navbar from 'components/Navbar'
import MainPage from 'components/MainPage'
import Features from 'components/Features'
import Contact from 'components/Contact'

const Home = () => {
  return (
    <>
      <Head>
        <title>Movie Watchlist</title>
      </Head>
      <Navbar />
      <MainPage />
      <Features />
      <Contact />
    </>
  )
}

export default Home
