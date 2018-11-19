import Search from '../components/search/Search';
import ArtistDetail from '../components/artist/ArtistDetail';

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
  }
};

