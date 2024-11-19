import React, { useState } from 'react';

const ReadMore = ({ text, additionalText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className='read-more-container'>
      <p>
        {text}
        <span className={`additional-text ${isExpanded ? 'expanded' : ''}`}>
          {additionalText}
        </span>
      </p>
      <button onClick={toggleReadMore} className='btn'>
        {isExpanded ? 'show less' : 'read more'}
      </button>
    </div>
  );
};

export default ReadMore;
