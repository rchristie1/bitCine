import React from 'react';
import styles from './index.module.scss';
import {createLinks} from '../functions/createLinks';

import { useSelector } from 'react-redux';

const ShipDetails = () => {

  const shipDetails = useSelector(state => state.shipDetails);
  
  const details = Object.keys(shipDetails).map((key, i) => {
    // remove the underscores from the text
    const formattedKey = key.replace(/_/g, ' ');
    
    // create links for films, pilots and URLS
    let link = createLinks(shipDetails[key], i);
    
    if(i===13) {      
      if (shipDetails[key].length === 0) {
        link = 'n/a';
      }
    }

    //convert the dates to a user friendly format
    if(i === 16 || i === 15) {
      const date = new Date(shipDetails[key]);
      shipDetails[key] = date.toLocaleDateString();
    }

    return (
      <div className={styles.info} key={`${key}${i}`}>
        <span>{key.includes('_') ? formattedKey : key}:&nbsp;</span>
        <span>{i === 13 || i === 14 || i === 17 ? link : shipDetails[key]}</span>
      </div>
    );
  });

  return(
    <div className={styles.detailWrapper}>
      <h1>Ship Details</h1>
      {details}
    </div>
  );
};

export default ShipDetails;
