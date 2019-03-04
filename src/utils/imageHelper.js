// Takes in an image array and imageHeight number to return an object that matches the imageHeight that was passed in.
// Used to get the right image from an array based on the screen size for responsiveness purposes.

const imageHelper = (images, imageHeight) => {
  const data = images.filter(image => {
    return image.height === imageHeight;
  });
  return Object.assign({}, data[0]);
};

export default imageHelper;
