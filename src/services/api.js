export const getArtists = (artistName) => {
    return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25`)
        .then(res => res.json())
        .then(json => json.artists);
};
