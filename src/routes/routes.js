import Search from '../components/search/search';
import ArtistDetail from '../components/artists/ArtistDetail';
// import ArtistWorks from '../components/work/Work';

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
  // ARTIST_WORKS: {
  //   path: '/work',
  //   Component: ArtistWorks,
  //   linkTo: () => '/work'
  // }
};
