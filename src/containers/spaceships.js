import React, { useEffect, useState } from 'react';
import ShipListing from '../components/shipListing';
import styles from './spaceships.module.scss';
import { handleScroll } from '../components/functions/handleScroll';
import ShipsContext from '../context/ShipsContext';

import Loader from '../components/widgets/loader';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions';

const SpaceShips = () => {
  const [items, setListItems] = useState();
  const [personCount, setPersonCount] = useState(0);

  const data = useSelector(state => state.data);
  const personData = useSelector(state => state.people);

  const dispatch = useDispatch();

  // CDM
  useEffect(() => {
    dispatch(actions.getAllShips());
    dispatch(actions.getAllPeople());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // CDU - check if data from store has updated
  useEffect(() => {
    let tmpArr = [];
    let count = personCount;

    // check if that values for these two items has been returned
    if (data && personData) {
      for (let i = 0; i < data.length; i++) {
        // load the first 6 items into the list
        if (i <= 5) {
          // after every second item insert a character name
          if (i > 0 && i % 2 === 0) {
            tmpArr = [...tmpArr, personData[count]];
            count = count + 1;
          }
          tmpArr = [...tmpArr, data[i]];
        }
      }
    }

    // update person count for when it's used in the scroll function
    setPersonCount(count);
    setListItems(tmpArr);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, personData]);

  useEffect(() => {
    if (items && items.length > 0) {
      window.addEventListener('scroll', () =>
        handleScroll(items, data, setListItems, personCount, personData, setPersonCount)
      );
      //remove move the event listener when component is unmounted
      return () => {
        window.removeEventListener('scroll', () => handleScroll());
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);


  return (
    <section className={styles.mainContent}>
      {items ? (
        <ShipsContext.Provider value={{ items, dispatch }}>
          <section className={styles.listings}>
            <ShipListing />
          </section>
        </ShipsContext.Provider>
      ) : (
        <Loader styles={styles.moreLoader}/>
      )}
    </section>
  );
};

export default SpaceShips;
