import React, { Component } from 'react';
import { getArtists } from '../../services/api';
import PropTypes from 'prop-types';
import Artist from '../artist/Artist';
import Pageable from '../pageable/Pageable';
export default class Artists extends Component {
    static propTypes = {
        artistName: PropTypes.string
    };

    state = {
        artists: [],
        currentPage: 0,
        totalPages: 0
    };

    updateResults = () => {
        const { artistName } = this.props;
        getArtists(artistName, this.state.currentPage).then(({ results, pages }) => {
            this.setState({ artists: results, totalPages: pages });
        });
    };

    handlePageUpdate = page => {
        this.setState({ currentPage: page }), () => {
            this.updateResults();
        };
    };

    componentDidMount() {
        this.updateResults();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.artistName !== this.props.artistName) {
            this.updateResults();
        }
    }

    render() {
        const { artists, currentPage, totalPages } = this.state;
        const artistsComponents = artists.map(artist => {
            return <Artist key={artist.id} artist={artist} />;
        });

        <Pageable currentPage={currentPage} totalPages={totalPages} updatePage={this.handleUpdatePage} />;
        return <div>{artistsComponents}</div>;
    }
}
