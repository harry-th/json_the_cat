let request = require('request');
let breedQuery = process.argv.slice(2)[0];
let fetchCatsByBreed = (breed) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,(error, response, body)=>{
    if (error) return console.log("there aren't any cats today");
    let bodyParsed = JSON.parse(body)[0];
    if (!bodyParsed) return console.log('that is not a cat my friend, I would know');
    console.log(`${bodyParsed.name}
    Has a: ${bodyParsed.temperament} temperament
    and originates from ${bodyParsed.origin}`);
  });
};

fetchCatsByBreed(breedQuery);

