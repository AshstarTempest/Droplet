import React from 'react';

export const AppleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Z"/>
    <path d="M18.33,12.67c0-3.16,2.58-4.67,2.69-4.73a5.73,5.73,0,0,0-4.53-2.46,5.86,5.86,0,0,0-4.14,2.47,4.75,4.75,0,0,1,1.1.8,4.6,4.6,0,0,1,1.08,3c0,2.36-1.8,3.59-2.31,3.84a5.23,5.23,0,0,0,2.42,3.22,10.57,10.57,0,0,0,1.6.73,4.44,4.44,0,0,0,1.67-2.17,4.86,4.86,0,0,1,1.87,2.06,5,5,0,0,0,1-2,5.78,5.78,0,0,1-2.3-3.08A5.08,5.08,0,0,0,18.33,12.67Z"/>
  </svg>
);

export const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5,3l12.5,9L5,21V3z"/>
  </svg>
);