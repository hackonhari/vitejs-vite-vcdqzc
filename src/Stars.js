import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import htm from 'htm';
import register from 'preact-custom-element';

import styles from './stars.css';

const html = htm.bind(h);

const getGithubStars = async (repo) => {
  const response = await fetch(`https://api.github.com/repos/${repo}`);
  const { stargazers_count: stars } = await response.json();
  return stars;
};

export const Stars = ({ repo }) => {
  const [count, setCount] = useState('…');
  useEffect(() => getGithubStars(repo).then(setCount), [repo]);

  return html`
    <style>
      ${styles}
    </style>
    <a
      href=${`https://github.com/${repo}`}
      class="stars"
      target="_blank"
      rel="noopener noreferrer"
    >
      ⭐️ ${count} Stars
    </a>
  `;
};

register(Stars, 'github-stars', ['repo'], { shadow: true });
