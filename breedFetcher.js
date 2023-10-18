const request = require('request');

const args = process.argv.slice(2);

const fetchBreed = (url) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${url}`, (error, response, body) => {
    if (error) {
      console.error(error);
    } else if (response.statusCode !== 200) {
      console.error(response.statusCode);
    } else {
      const data = JSON.parse(body)
      console.log(data);
    }
  });
};

fetchBreed(args[0]);
