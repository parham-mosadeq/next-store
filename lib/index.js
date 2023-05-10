export const trimTitles = (txt) => {
  const fixed = txt.split(' ')[0];

  return fixed;
};

export const checkCart = (id, state) => {
  if (state.itemsID.find((itemID) => itemID === id)) {
    return true;
  }
};
