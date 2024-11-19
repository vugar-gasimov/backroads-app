import React from 'react';
import { pageLinks } from '../data';
import PageLinksComponent from './PageLinksComponent';

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((link) => {
        return (
          <PageLinksComponent key={link.id} {...link} itemClass={itemClass} />
        );
      })}
    </ul>
  );
};

export default PageLinks;
