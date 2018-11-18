const PAGE_SIZE = 25;

export const getArtists = (searchName, page = 1) => {

  const emptyResult = {
    totalPages: 0,
    totalResults: 0,
    results: []
  };
  if(searchName.length < 1) return Promise.resolve(emptyResult);

  const offset = (page - 1) * 25;
  return get(`http://musicbrainz.org/ws/2/artist?query=${searchName}&limit=${PAGE_SIZE}&offset=${offset}&fmt=json`)
    .then(({ count, artists }) => {
      if(count === 0) return emptyResult;
      return {
        totalPages: Math.ceil(count / PAGE_SIZE),
        totalResults: count,
        results: artists.map(artist => ({
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
      works: artist.works
    }));
};

const get = url => {
  return fetch(url)
    .then(res => res.json());
};
