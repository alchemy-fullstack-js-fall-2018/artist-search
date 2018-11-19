const PAGE_SIZE = 25;

export const getArtists = (artistName, page) => {
    const offset = page * 25;
    return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25&offset=${offset}`)
        .then(({ count, artists }) => {
            return {
                pages: Math.ceil(count / PAGE_SIZE),
                artists: artists.map(artist => ({
                    name: artist.name
                }))
            };
        });
};

export const getArtist = id => {
    return fetch(`http://musicbrainz.org/ws/2/artist/${id}?fmt=json&inc=works`)
        .then(res => res.json());
};
