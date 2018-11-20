import React from 'react';
import Search from '../components/search/Search';
import ArtistDetail from '../components/artist/ArtistDetail';
import Lyrics from '../components/lyrics/Lyrics';

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
  },
  SONGS: {
    path: '/lyrics/:artist/:song',
    Component: Lyrics,
    linkTo: (song, artist) => `/lyrics/${artist}/${song}`
  }
};
