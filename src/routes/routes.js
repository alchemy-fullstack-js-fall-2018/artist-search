import Search from '../components/search/Search';
import ArtistDetail from '../components/artist/ArtistDetail';
import Song from '../components/song/Song';

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
    path:'/lyrics/:artist/:lyrics',
    Component: Song,
    linkTo: (artist, song) => `/lyrics/${artist}/${song}`
  }
};

