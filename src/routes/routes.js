import Search from '../components/search/Search';
import ArtistDetail from '../components/artist/ArtistDetail';
import Songs from '../components/song/Songs';

export const ROUTES = {
  SEARCH: {
    path: '/search',
    Component: Search,
    linkTo: () => '/search'
  },
  ARTIST: {
    path: '/artists/:id',
    Component: ArtistDetail,
    linkTo: id => `/artists/${id}`
  },
  SONG: {
    path:'/lyrics/:artist/:song',
    Component: Songs,
    linkTo: (artist, song) => `/lyrics/${artist}/${song}`
  }
};

