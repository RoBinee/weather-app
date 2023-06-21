import './style.css';
import fetchData from './fetchData.js';
import arrangeData from './arrangeData.js';
import displayContent from './displayContent.js';
import loadingPage from './loadingPage.js';
const form = document.querySelector('.form');
const container = document.getElementById('container');
let inputValue;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //display the weahter
  //0.during 1-4, display loading page in container
  container.append(loadingPage());
  //1. get the input value
  const input = form.querySelector('input');
  inputValue = input.value;
  //2. fetch the data using input value
  fetchData(inputValue)
    .then((data) => {
      //3. unstructure the data
      const dataObj = arrangeData(data);
      //4. remove loading
      container.innerHTML = ``;
      //5. display the content using dataObj(remove loading)
      //first, just display the content in container(no design)
      displayContent(dataObj);
    })
    .catch((error) => {
      console.error(error);
    });

  //3. process that data
  // container.innerHTML = `<h1>Display a weather</h1>`;
});
