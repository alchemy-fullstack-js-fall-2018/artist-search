import Search from '../components/search/search';
import ArtistDetail from '../components/artists/ArtistDetail';
import Lyrics from '../components/work/Lyrics';

export const ROUTES = {
  ARTIST_SEARCH: {
    path: '/artist-search',
    Component: Search,
    linkPath: () => '/artist-search'
  },
  ARTIST: {
    path: '/artists/:id',
    Component: ArtistDetail,
    linkTo: id => `/artists/${id}`
  },
  LYRICS: {
    path: '/work/:artist/:title',
    Component: Lyrics,
    linkTo: (artist, title) => `/work/${artist}/${title}`
  }
};
