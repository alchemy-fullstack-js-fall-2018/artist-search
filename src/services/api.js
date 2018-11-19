// export const getArtists = () => {
//     return fetch(`http://musicbrainz.org/ws/2/artist?query=nirvana&fmt=json&limit=25`)
//         .then(res => res.json())
//         .then(json => {
//             const artists = json.results.artists.map(artist => {
//                 return {
//                     name: artist.name
//                 };
//             });

//             return {
//                 artists
//             };
//         });
// };
