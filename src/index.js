import './style.css';
import fetchData from './fetchData.js';
import arrangeData from './arrangeData.js';
import displayContent from './displayContent.js';
import loadingPage from './loadingPage.js';

const form = document.querySelector('.form');

form.addEventListener('submit', displayWeather);

function displayWeather(e) {
  const container = document.getElementById('container');
  const input = form.querySelector('input');

  e.preventDefault();
  //display the weahter
  //0.during 1-4, display loading page in container
  container.innerHTML = loadingPage();

  //1. get the input value
  let inputValue = input.value;
  //2. fetch the data using input value
  fetchData(inputValue)
    .then((data) => {
      //3. unstructure the data
      const dataObj = arrangeData(data);
      //5. display the content using dataObj(remove loading)
      //first, just display the content in container(no design)
      container.innerHTML = displayContent(dataObj);
    })
    .catch((error) => {
      console.error(error);
      container.innerHTML = `<h1>Error! Please write down again </h1>`;
    });
}
