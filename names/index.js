const array = require("../country/state/city/index.js");
const firstName = require("../utilities/utils/index.js");

const getPeopleInCity = (array) => {
  return firstName(array);
};
module.exports = getPeopleInCity;
