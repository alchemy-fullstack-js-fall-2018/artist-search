import Search from '../components/search/search';
import ArtistDetail from '../components/artists/ArtistDetail';

export const ROUTES = {
  ARTIST_SEARCH: {
    path: '/artist-search',
    Component: Search,
    linkPath: () => '/artist-search'
  },
  ARTIST: {
    path: '/artist/:id',
    Component: ArtistDetail,
    linkTo: id => `/artists/${id}`
  }
};
