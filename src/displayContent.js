const displayContent = (obj) => {
  const { name, date, weather, icon, temp, humidity } = obj;

  console.log(obj);

  const string = `<h1>${name}! ${date}, ${weather},${temp}, ${humidity}</h1><img src=${icon} />`;
  return string;
};

export default displayContent;
