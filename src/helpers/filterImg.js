export const filterImg = (item) => {
  let imgUrl;
  let cutIndex;
  item.indexOf(")");
  cutIndex = [item.indexOf("(") + 1, item.indexOf(")")];
  imgUrl = item.slice(cutIndex[0], cutIndex[1]);
  return imgUrl;
};
