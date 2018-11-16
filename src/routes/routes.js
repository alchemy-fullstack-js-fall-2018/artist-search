import React from 'react';
import Search from '../components/search/Search';
import Artist from '../components/artist/Artist';
import About from '../components/about/About';

export const ROUTES = {
  SEARCH: {
    path: '/search',
    Component: Search,
    linkTo: () => '/search'
  },
  ARTIST: {
    path: '/artists/',
    Component: Artist,
    linkTo: () => '/artists'
  },
  ABOUT: {
    path: '/about/',
    Component: About,
    linkTo: () => '/about'
  }
};
