import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieInfo extends Component {
  render() {
    const { error, loading, movieInfo } = this.props;

    if (loading) {
      return <p>Loading...</p>
    }

    if (error) {
      return <p>{ error }</p>
    }

    return (
      <div>
        <h1>Movie Info</h1>
        <img src={movieInfo.Poster} alt={movieInfo.Title} />
        <p>{ movieInfo.Title }</p>
        <p>{ movieInfo.Year }</p>
      </div>
    );
  }
}

const mapStateToProps = ({ movie }) => ({
  error: movie.error,
  loading: movie.loading,
  movieInfo: movie.movieInfo,
});

export default connect(mapStateToProps)(MovieInfo);
