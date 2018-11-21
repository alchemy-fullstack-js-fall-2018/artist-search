export const getArtists = page => {
  return fetch('http://musicbrainz.org/ws/2/artist?query=nirvana&fmt=json&limit=25', {
    headers: { origin: null }
  })
    .then(res => res.json())
    .then(json => {
      const artist = json.results.map(result => {
        return {
          artist: artist,
        };
      });

      return {
        pages: json.info.pages,
        artist
      };
    });
};
