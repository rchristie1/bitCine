import React from 'react';

export const createLinks = (value, i) => {
  //this funtion makes splits up each link instead of returning a long invalid string
  let link;

  if (i === 13 || i === 14 || i === 17) {
    if (typeof value === 'object') {
      return (link = value.map((item, j) => (
        <a key={j} href={item} rel='noopener noreferrer' target='_blank'>
          {item}
        </a>
      )));
    }
    link = (
      <a href={value} rel='noopener noreferrer' target='_blank'>
        {value}
      </a>
    );
  }

  return link;
};
