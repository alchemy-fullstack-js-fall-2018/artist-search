import About from '../components/about/About';
import Search from '../components/search/Search';
import Artist from '../components/artist/Artist';
import Lyrics from '../components/lyrics/Lyrics';

export const ROUTES = {
  ABOUT: {
    path: '/about/',
    Component: About,
    linkTo: () => '/about'
  },
  SEARCH: {
    path: '/search',
    Component: Search,
    linkTo: () => '/search'
  },
  ARTIST: {
    path: '/artists/:id',
    Component: Artist,
    linkTo: id => `/artists/${id}`
  },
  LYRICS: {
    path: '/lyrics/:artist/:title',
    Component: Lyrics,
    linkTo: (artist, title) => `/lyrics/${artist}/${title}`
  }
};
