const pickRandomVideo = (array) => {
  const length = array.length;
  const getRandomNumber = () => {
    return Math.floor(Math.random() * length);
  };
  const randomNumber = getRandomNumber();
  const selectedVideo = array[randomNumber];
  return selectedVideo;
};

export default pickRandomVideo;
