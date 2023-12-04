import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { variables } from './Variables.js';

const EpisodeDetail = () => {
  const { episodeId } = useParams();
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (episodeId) {
          const response = await fetch(`${variables.API_URL}episode/get/${episodeId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch episode data');
          }

          const data = await response.json();
          console.log('Episode Detail API Response:', data);
          setEpisode(data);
        }
      } catch (error) {
        console.error('Error fetching episode detail data:', error);
        setError('Error fetching episode detail data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [episodeId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!episode) {
    return <p>No episode data available</p>;
  }

  return (
    <div>
      <h2>{episode.episodeName}</h2>
      <p>{episode.episodeDescription}</p>
    </div>
  );
};

export default EpisodeDetail;
