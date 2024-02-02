export const getRandomPhoto = () => {
  const photos = [
    require('../../assets/1.png'),
    require('../../assets/2.png'),
    require('../../assets/3.png'),
    require('../../assets/5.png'),
    require('../../assets/6.png'),

    require('../../assets/9.png'),
    require('../../assets/10.png'),
    require('../../assets/11.png'),
  ];
  return photos[Math.floor(Math.random() * photos.length)];
};
