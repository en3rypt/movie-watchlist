import Head from 'next/head'
import Navbar from 'components/Navbar'
import MainPage from 'components/MainPage'
const Home = () => {
  return (
    <>
      <Head>
        <title>Movie Watchlist</title>
      </Head>
      <Navbar />
      <MainPage />
    </>
  )
}

export default Home
