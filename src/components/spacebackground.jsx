// SpaceBackground.js
import React from 'react';

const spacebackground = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black to-blue-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path_to_your_star_image.png')] bg-repeat animate-twinkle"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="shooting-star"></div>
      </div>
    </div>
  );
};

export default spacebackground;
