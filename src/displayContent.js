const displayContent = (obj) => {
  const { name, date, weather, icon, temp, humidity } = obj;

  const string = `<section>
  <h1>${name}</h1><img src=${icon} /><h1>${weather}</h1><h3>${temp}°C</h3><p>humidity ${humidity}</p><p>${date}</p>
  </section>`;
  return string;
};

export default displayContent;
