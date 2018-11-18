import Artists from '../components/artists/Artists';
import ArtistDetail from '../components/artists/ArtistDetail';

export const ROUTES = {
  ARTIST_SEARCH: {
    path: '/artistSearch',
    Component: Artists,
    linkTo: () => '/artistSearch'
  },
  ARTIST: {
    path: '/artists/:id',
    Component: ArtistDetail,
    linkTo: id => `/artists/${id}`
  }
};
