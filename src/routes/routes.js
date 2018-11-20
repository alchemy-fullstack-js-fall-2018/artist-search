import Search from '../components/search/Search';
import ArtistDetail from '../components/artistDetail/ArtistDetail';
import SongDetail from '../components/songDetail/SongDetail';

export const ROUTES = {
    SEARCH: {
        path: '/',
        Component: Search,
        linkPath: () => '/'
    },
    ARTIST: {
        path: '/artists/:id',
        Component: ArtistDetail,
        linkPath: id => `/artists/${id}`
    },
    SONG: {
        path: '/songs/:id',
        Component: SongDetail,
        linkPath: id => `/songs/${id}`
    }
};
