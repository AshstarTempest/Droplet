import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#E1F5FE] to-white flex items-center justify-center z-50">
      <div className="relative flex flex-col items-center">
        <div className="water-drop">
          <div className="drop"></div>
          <div className="waves">
            <div></div>
            <div></div>
          </div>
          <div className="splash"></div>
          <svg width="0" height="0">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <h2 className="mt-6 text-2xl font-bold text-[#1A73E8] animate-pulse">
          Droplet
        </h2>
        <p className="text-gray-600 mt-2">Turn focus into flow</p>
      </div>
    </div>
  );
};

export default Preloader;
