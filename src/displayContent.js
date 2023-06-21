const displayContent = (obj) => {
  const { date, weather, icon, temp, humidity } = obj;
  container.innerHTML = `<h1>${date}, ${weather},${temp}, ${humidity}</h1><img src=${icon} />`;
};

export default displayContent;
