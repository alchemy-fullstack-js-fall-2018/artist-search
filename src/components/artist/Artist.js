import React from 'react';

export default function Artist({ artist }) {
    console.log(artist);
    return (
        <p>{artist.name}</p>
    );
}
