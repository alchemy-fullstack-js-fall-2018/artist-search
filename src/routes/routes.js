import Search from '../components/search/Search';
import ArtistDetail from '../components/artists/ArtistDetail';
import Lyrics from '../components/works/Lyrics';

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
  LYRICS: {
    path:'/lyrics/:artist/:title',
    Component: Lyrics,
    linkTo: (artist, title) => `/lyrics/${artist}/${title}`
  }
};
