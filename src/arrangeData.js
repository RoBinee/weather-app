const arrangeData = ({ current }) => {
  /**Use condition.text(weather desc), condition.icon, last_updated(date), temp_c, humidity*/
  const { condition, last_updated, temp_c, humidity } = current;
  const { text, icon } = condition;

  //return the arranged data object
  return { date: last_updated, weather: text, icon, temp: temp_c, humidity };
};

export default arrangeData;
