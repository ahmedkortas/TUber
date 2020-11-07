module.exports.priceCalculator = (object) => {
  let distance = Math.floor(object.distance / 1000);
  let time = Math.floor(object.time / 60);
  let data = new Date();
  let h = data.getHours();
  if (h < 21 && h > 5) {
    var condition = 1;
  } else {
    var condition = 1.5;
  }
  let result = 2000;
  return (
    (result = result + distance * 0.2 * 1000 + time * 0.1 * 1000) * condition
  );
};
