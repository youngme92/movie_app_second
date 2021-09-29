import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movies({ id, title, summary, year, poster, youtubeUrl, genres }) {
    Movies.propTypes = {
        id: propTypes.number.isRequired,
        title: propTypes.string.isRequired,
        year: propTypes.number.isRequired,
        summary: propTypes.string.isRequired,
        poster: propTypes.string.isRequired,
        youtubeUrl: propTypes.string.isRequired,
        genres: propTypes.arrayOf(propTypes.string).isRequired,
    }
    const openYoutube = () => {
        window.open(`https://www.youtube.com/watch?v=${youtubeUrl}`);
    }
    return (
        <div className="movie">
            <img className="movie__img" onClick={openYoutube} src={poster} title={title} alt={title} />
            <Link to={
                {
                    pathname: `/Detail/${id}`,
                    state: {
                        title,
                        summary,
                        year,
                        poster,
                        genres
                    }
                }
            }>
                <div className="movie__data">

                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((item, index) => (
                            <li key={index} className="genres_genre">
                                {item}
                            </li>))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
    )
}


export default Movies;