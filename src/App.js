import React from 'react';
import { connect } from 'react-redux';

import MovieInfo from './MovieInfo';

import { fetchMovie as fetchMovieAction } from './redux/actions/movieActions';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      query: target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { fetchMovie } = this.props;
    const { query } = this.state;

    fetchMovie(query);
  };

  render() {
    const { query } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={query} />
          <button type="submit" onClick={this.handleSubmit}>
            search
          </button>
        </form>
        <MovieInfo />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMovie: (query) => dispatch(fetchMovieAction(query)),
});

export default connect(null, mapDispatchToProps)(App);
