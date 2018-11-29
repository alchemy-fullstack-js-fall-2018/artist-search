import Search from '../components/search/Search';
import ArtistList from '../components/artists/ArtistList';

export const ROUTES = {
  SEARCH: {
    path: '/search',
    Component: Search,
    linkTo: () => '/search'
  },
  ARTISTS: {
    path: '/artists',
    Component: ArtistList,
    linkPath: () => '/artists'
  }
};
