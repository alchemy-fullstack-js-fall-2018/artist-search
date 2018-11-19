import React from 'react';
import Search from '../components/search/Search';
import ArtistDetail from '../components/artist/ArtistDetail';

export const ROUTES = {
  ARTIST: {
    path: '/artists/:id',
    Component: ArtistDetail,
    linkTo: id => `/artists/${id}`
  },
  SEARCH: {
    path: '/search',
    Component: Search,
    linkTo: () => '/search'
  },
  LANDING: {
    path: '/landing',
    Component: () => <h1>Welcome To Artist Search</h1>,
    linkTo: () => '/landing'
  }
};
