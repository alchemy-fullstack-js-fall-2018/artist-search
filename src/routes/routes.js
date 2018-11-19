import Search from '../components/search/Search';
import ArtistDetail from '../components/artistDetail/ArtistDetail';

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
    }
};
