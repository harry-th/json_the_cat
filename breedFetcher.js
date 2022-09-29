let request = require('request');
let fetchBreedDescription = (breed, callback) =>  {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,(error,response, body) => {
    if (error) return callback(error, null);
    let desc = JSON.parse(body)[0];
    if (desc) return callback(null, desc.description);
    if (!desc) return callback('no cats', null);
  });
};
module.exports = fetchBreedDescription;




