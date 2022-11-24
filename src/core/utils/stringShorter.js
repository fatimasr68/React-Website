const stringShorter = (text, size) => {
  let newString = text && text.length > 40 ? text.slice(0, size) + "..." : text;
  return newString;
};

export { stringShorter };
