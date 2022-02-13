const NOW_PLAYING_API =
  'https://api.themoviedb.org/3/movie/now_playing?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&page=1'
const POPULAR_API =
  'https://api.themoviedb.org/3/movie/popular?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&page=1'

const TOP_RATED_API =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&page=1'

const UP_COMING_API =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&page=1'

const TRENDING_API =
  'https://api.themoviedb.org/3/trending/movie/week?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US'

const COMEDY_API =
  'https://api.themoviedb.org/3/discover/movie?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&sort_by=popularity.desc&with_genres=35'
const ROMANCE_API =
  'https://api.themoviedb.org/3/discover/movie?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&sort_by=popularity.desc&with_genres=10749'
const HORROR_API =
  'https://api.themoviedb.org/3/discover/movie?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&sort_by=popularity.desc&with_genres=27'
const ACTION_API =
  'https://api.themoviedb.org/3/discover/movie?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&sort_by=popularity.desc&with_genres=28'
const ADVENTURE_API =
  'https://api.themoviedb.org/3/discover/movie?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&sort_by=popularity.desc&with_genres=12'
const DOCUMENTARY_API =
  'https://api.themoviedb.org/3/discover/movie?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&sort_by=popularity.desc&with_genres=99'
const SCIFI_API =
  'https://api.themoviedb.org/3/discover/movie?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&sort_by=popularity.desc&with_genres=878'
const FANTASY_API =
  'https://api.themoviedb.org/3/discover/movie?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&sort_by=popularity.desc&with_genres=14'
const THRILLER_API =
  'https://api.themoviedb.org/3/discover/movie?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&sort_by=popularity.desc&with_genres=53'
const WAR_API =
  'https://api.themoviedb.org/3/discover/movie?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&sort_by=popularity.desc&with_genres=10752'
const ANIMATION_API =
  'https://api.themoviedb.org/3/discover/movie?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&sort_by=popularity.desc&with_genres=16'
const FAMILY_API =
  'https://api.themoviedb.org/3/discover/movie?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&sort_by=popularity.desc&with_genres=10751'

// const SEARCH_API =
//   'https://api.themoviedb.org/3/search/movie?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&query=' +
//   searchQuery +
//   '&page=1&include_adult=false'

// const FILTER_API = 'https://api.themoviedb.org/3/discover/movie?api_key=4de2c28fb14516591e0910cd1df22d69&language=en-US&sort_by=popularity.desc&with_genres='+ genreId +'&page=1'

const MOVIE_API = [
  ['Up Coming Movies', UP_COMING_API],
  ['Trending Movies', TRENDING_API],
  ['Popular Movies', POPULAR_API],
  ['Top Rated Movies', TOP_RATED_API],
  ['Comedy Movies', COMEDY_API],
  ['Romance Movies', ROMANCE_API],
  ['Horror Movies', HORROR_API],
  ['Action Movies', ACTION_API],
  ['Animation Movies', ANIMATION_API],
  ['Adventure Movies', ADVENTURE_API],
  ['Sci-Fi Movies', SCIFI_API],
  ['Thriller Movies', THRILLER_API],
  ['Fantasy Movies', FANTASY_API],
  ['Family Movies', FAMILY_API],
  ['Documentaries', DOCUMENTARY_API]
]
export default MOVIE_API
export { NOW_PLAYING_API }
