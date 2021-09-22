import React from 'react';
import propTypes from 'prop-types';

function Movies({ id, title, summary, year, poster, youtubeUrl }) {
    Movies.propTypes = {
        id: propTypes.number.isRequired,
        title: propTypes.string.isRequired,
        year: propTypes.string.isRequired,
        summary: propTypes.string.isRequired,
        poster: propTypes.string.isRequired,
        youtubeUrl: propTypes.string.isRequired,
    }
    const openYoutube = () => {
        window.open(`https://www.youtube.com/watch?v=${youtubeUrl}`);
    }
    return (
        <div className="movie">
            <img className="movie__img" onClick={openYoutube} src={poster} title={title} alt={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    )
}


export default Movies;