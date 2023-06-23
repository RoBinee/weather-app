const arrangeData = (obj) => {
  const { current, location } = obj;
  /**Use condition.text(weather desc), condition.icon, last_updated(date), temp_c, humidity*/
  const { condition, last_updated, temp_c, humidity } = current;
  const { text, icon } = condition;
  const { country } = location;

  //return the arranged data object
  return {
    name: country,
    date: last_updated,
    weather: text,
    icon,
    temp: temp_c,
    humidity,
  };
};

export default arrangeData;
