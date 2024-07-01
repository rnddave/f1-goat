import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './UserVotes.css';

const UserVotes = ({ goatVote, toadVote }) => {
  const shareText = `I just voted for who I think is the F1 GOAT 🐐 (${goatVote}) and F1 TOAD 🐸 (${toadVote})! Check it out: [YOUR_WEBSITE_URL]`;

  return (
    <div className="user-votes">
      <h2>Your Votes</h2>
      <div className="votes-container">
        <div className="vote">
          <span role="img" aria-label="goat">🐐</span> {goatVote}
        </div>
        <div className="vote">
          <span role="img" aria-label="frog">🐸</span> {toadVote}
        </div>
      </div>
      <div className="social-links">
        Share on your Socials!
        <a href={`https://www.facebook.com/sharer/sharer.php?u=https://f1-goat.com&quote=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default UserVotes;
