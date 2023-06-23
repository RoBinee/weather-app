import MyImage from './loader.gif';

const loadingPage = () => {
  const gif = new Image();
  gif.src = MyImage;
  return gif;
};

export default loadingPage;
