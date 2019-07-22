import debounce from 'lodash.debounce';

/* debounce this effect so it doesnt push too quickly with
aggresive scrolling */
export const handleScroll = debounce((items, data, setListItems, personCount, personData, setPersonCount) => {  
  let tempArray = items;
  let count = personCount;
  // get the distance until the bottom of the page
  const distanceToBottom = document.body.scrollHeight - window.innerHeight - window.scrollY;

  /* when the distance gets below the given value push another 
  item into the array which will increase the height */
  if (distanceToBottom < 16) {
    for (let i = tempArray.length; i < items.length + 3; i++) {
      if (data[i - count]) {
        if (i % 2 === 0) {
          tempArray = [...tempArray, personData[count]];

          count = count + 1;
        }
        tempArray = [...tempArray, data[i - personCount]];
      }
    }
    setPersonCount(count);
    setListItems(tempArray);
  }
}, 150);