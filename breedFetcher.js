const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  console.log(response);
  console.log(body);
  console.error(error);
});

