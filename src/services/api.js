const PAGE_SIZE = 25;

export const getArtists = (artistName, page) => {
    const offset = (page - 1) * 25;
    return fetch(
        `http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25&offset=${offset}`
    ).then(res => res.json())
        .then(({ count, artists }) => {
            return {
                pages: Math.ceil(count / PAGE_SIZE),
                artists: artists.map(artist => ({
                    name: artist.name,
                    id: artist.id
                }))
            };
        });
};

export const getArtist = id => {
    return fetch(
        `http://musicbrainz.org/ws/2/artist/${id}?fmt=json&inc=works`
    ).then(res => res.json());
};
