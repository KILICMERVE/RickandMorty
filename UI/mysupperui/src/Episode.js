// Episodes.js

import React, { Component } from "react";
import { variables } from './Variables.js';
import { Link } from 'react-router-dom';

class Episodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: [],
    };
  }

  componentDidMount() {
    // Bölümleri API'den al
    fetch(variables.API_URL + 'episode/getall')
      .then(response => response.json())
      .then(data => {
        console.log('Episodes API Response:', data);
        this.setState({ episodes: data });
      })
      .catch(error => console.error('Error fetching episodes data:', error));
  }

  render() {
    const { episodes } = this.state;

    return (
      <div className="episode-list">
        <h2>Rick and Morty Bölümler</h2>
        <ul style={{ listStyleType: 'none', color: 'darkgoldenrod' }}>
          {episodes.map(episode => (
            <li key={episode.episodeId}>
              <strong>{episode.episodeName}</strong> - <Link to={`/episode-detail/${episode.episodeId}`} style={{ color: 'darkgoldenrod', textDecoration: 'none' }}>Detayları Gör</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Episodes;
