import React from 'react';

const PageLinksComponent = ({ href, text, itemClass }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
};

export default PageLinksComponent;
