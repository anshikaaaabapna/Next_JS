import React from 'react'; // Import React at the beginning
'use client';

function Petspage() {
  return (
    <div>
      {
        ['1', '2'].map(path => {
          // Use require() to correctly resolve image paths (adjust the path as needed)
          const imagePath = require(`./${path}.jpg`).default;

          return (
            <div key={path}>
              <img src={imagePath} alt="pet" width="280" height="420" />
            </div>
          );
        })
      }
    </div>
  );
}

export default Petspage;
