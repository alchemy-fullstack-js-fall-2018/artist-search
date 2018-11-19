import { get } from './request';
const PAGE_SIZE = 10;

export const getArtists = (searchName, page = 1) => {
  const offset = (page - 1) * 25;
  return get(`http://musicbrainz.org/ws/2/artist?query=${searchName}&limit=${PAGE_SIZE}&offset=${offset}&fmt=json`)
    .then(({ count, artists }) => {
      return {
        pages: Math.ceil(count / PAGE_SIZE),
        artists: artists.map(artist => ({
          name: artist.name,
          description: artist.disambiguation,
          id: artist.id
        }))
      };
    });
};
export const getArtist = id => {
  return get(`http://musicbrainz.org/ws/2/artist/${id}?fmt=json&inc=works`)
    .then(artist => ({
      id: artist.id,
      name: artist.name,
      songs: artist.works
    }));
};
