import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink
            to={`/movies/${movie.id}`}
            className="saved-movie"
            key={movie.id}
          >
            {movie.title}
          </NavLink>
        ))}
        <button
          className="home-button"
          onClick={() => this.props.history.push('/')}
        >
          Home
        </button>
      </div>
    );
  }
}
