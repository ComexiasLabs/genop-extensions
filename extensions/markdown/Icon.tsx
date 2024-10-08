import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ width = 64, height = 64, color = '#000000' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 208 128">
      <rect width="198" height="118" x="5" y="5" ry="10" stroke="#000" strokeWidth="10" fill="none" />
      <path d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z" fill={color} />
    </svg>
  );
};

export default Icon;
