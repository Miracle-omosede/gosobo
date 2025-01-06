import { useState } from 'react';
import construction from '../assets/images/construction.svg';

const Construction = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className='relative'>
      {/* Preloader */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent"></div>
        </div>
      )}
      {/* Image */}
      <img
        src={construction}
        alt="site-in-construction"
        className={`object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default Construction;
