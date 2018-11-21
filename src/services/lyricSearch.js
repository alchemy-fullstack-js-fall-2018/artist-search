import { get } from './request';

export const getLyrics = (artist, title) => {
  return get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then(json => ({
      lyrics: json.lyrics
    }));
};
