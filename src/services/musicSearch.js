const PAGE_SIZE = 10;

export const getArtists = (searchName, page = 0) => {
  const offset = page * 25;
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchName}&limit=${PAGE_SIZE}&offset=${offset}&fmt=json`)
    .then(res => res.json())
    .then(({ count, artists }) => {
      return {
        totalPages: Math.ceil(count / PAGE_SIZE),
        artists: artists.map(artist => ({
          name: artist.name,
          description: artist.disambiguation,
          id: artist.id
        }))
      };
    });
};

export const getArtist = id => {
  return fetch(`http://musicbrainz.org/ws/2/artist/${id}?fmt=json&inc=works`)
    .then(res => res.json())
    .then(artist => ({
      id: artist.id,
      name: artist.name,
      works: artist.works
    }));
};
