import Loading from './loader.gif';

const loadingPage = () => {
  const gif = new Image();
  gif.src = Loading;
  return gif;
};

export default loadingPage;
