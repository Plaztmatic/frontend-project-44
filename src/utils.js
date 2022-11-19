const generateRandomNumber = (number) => {
  const randomNumber = Math.round(Math.random() * 10) + number;
  return randomNumber;
};
export default generateRandomNumber;
