//my key
//2e831a32648d408c8da51835232106

async function fetchData(value) {
  const url = `http://api.weatherapi.com/v1/current.json?key=2e831a32648d408c8da51835232106&q=${value}`;
  const response = await fetch(url);
  //get the data from API
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error(`There is no country, named ${value}`);
  }
}

export default fetchData;
