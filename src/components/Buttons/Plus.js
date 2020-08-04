import React from 'react';

function Plus({ type }) {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <g fill="none">
        <path stroke={type === 'white' ? '#ffffff' : '#000000'} strokeWidth="1.5" d="M25,15.6v18.8 M15.6,25h18.8" />
      </g>
    </svg>
  );
}

export default Plus;
