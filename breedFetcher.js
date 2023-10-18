const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    console.log(body);
  }
});

