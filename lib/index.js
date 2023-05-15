export const trimTitles = (txt, idx = 0) => {
  const fixed = txt.split(' ').join('').slice(0, idx);

  return fixed;
};

export const checkCart = (id, state) => {
  if (state.itemsID.find((itemID) => itemID === id)) {
    return true;
  }
};

export const sortItems = (items) => {
  const newArray = [...items];
  const sortedItems = newArray.sort((a, b) => a.price - b.price);
  return sortedItems;
};
