import Artists from '../components/artists/Artists';
import ArtistDetail from '../components/artists/ArtistDetail';
import WorkDetail from '../components/works/WorkDetail';

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
  },
  WORK: {
    path: '/works/:artist/:title',
    Component: WorkDetail,
    linkTo: (artist, title) => `/works/${artist}/${title}`
  }
};
