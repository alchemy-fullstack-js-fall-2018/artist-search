import ArtistSearch from '../components/artists/ArtistSearch';
import ArtistDetail from '../components/artists/ArtistDetail';
import WorkDetail from '../components/works/WorkDetail';

export const ROUTES = {
  ARTIST_SEARCH: {
    path: '/artistSearch',
    Component: ArtistSearch,
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
