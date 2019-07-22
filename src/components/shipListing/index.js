import React, { useContext } from 'react';
import styles from './index.module.scss';
import ShipsContext from '../../context/ShipsContext';

import { Link } from 'react-router-dom';

import { getShipDetails } from '../../store/actions';

const ShipListing = () => {
  const { items, dispatch } = useContext(ShipsContext);

  let shipContainer;

  if (items) {
    shipContainer = items.map((details, i) => (
      /* a basic check is done below to see if the person object has property
      that only exists on vehicles. it its a person render a baisc element*/
      <div className={styles.ship} key={i}>
        {items[i] ? (
          <>
            {details.model ? (
              <Link to='/details' onClick={() => dispatch(getShipDetails(details))}>
                <div>{items[i].name}</div>
              </Link>
            ) : (
              <div>{items[i].name}</div>
            )}
            <div>{items[i].model}</div>
            <div>{items[i].manufacturer}</div>{' '}
          </>
        ) : (
          <div>empty</div>
        )}
      </div>
    ));
  }

  return (
    <>
      <div className={styles.tableHeader}>
        <div>Name</div>
        <div>Model</div>
        <div>Manufacturer</div>
      </div>
      <div className={styles.tableBody}>{shipContainer}</div>
    </>
  );
};

export default ShipListing;
