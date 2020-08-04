import React from 'react';

function Arrow({ type, white = false }) {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70">
      {type === 'prev' ? (
        <g fill="none">
          <path stroke={white ? '#ffffff' : '#000000'} strokeWidth="3" d="M39 43L31 35 39 27" />
        </g>
      ) : (
        <g fill="none">
          <path
            stroke={white ? '#ffffff' : '#000000'}
            strokeWidth="3"
            d="M39 43L31 35 39 27"
            transform="matrix(-1 0 0 1 70 0)"
          />
        </g>
      )}
    </svg>
  );
}

export default Arrow;
