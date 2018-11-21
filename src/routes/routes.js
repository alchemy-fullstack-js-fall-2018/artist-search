import ArtistList from '../components/artists/ArtistList';

export const ROUTES = {
  ARTISTS: {
    path: '/artists',
    Component: ArtistList,
    linkPath: () => '/artists'
  }
};
