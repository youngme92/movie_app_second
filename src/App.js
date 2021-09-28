// import Food from './example';
// import propTypes from 'prop-types';
import axios from 'axios';
import React from 'react';
import Movies from './Movies';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor!!');
  }
  state = {
    isLoading: true,
    movies: []
  }
  getMoives = async () => {
    const { data: { data: { movies } } } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMoives();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="container">
        {isLoading ? (
          <div className="loader">
            <h2>isLoading...</h2>
          </div>
        ) : movies.map(movies => (
          <div key={movies.id} className="movies">
            <Movies
              key={movies.id}
              id={movies.id}
              year={movies.year}
              title={movies.title}
              summary={movies.summary}
              youtubeUrl={movies.yt_trailer_code}
              poster={movies.medium_cover_image}
              genres={movies.genres} />
          </div>
        ))}
      </div>
    )
  }
}

export default App;
