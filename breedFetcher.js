const request = require('request');

/**
 * Fetches the description of a given cat breed.
 * @param {string} breedName - The name of the cat breed to fetch.
 * @param {function} callback - A callback function to handle the result.
 */

const fetchBreed = (breedName, callback) => {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(apiUrl, (error, response, body) => {
    if (error) {
      callback(error);
    } else if (response.statusCode !== 200) {
      callback(response.statusCode);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback('Breed not found');
      } else {
        callback(data[0].description);      
      }
    }
  });
};

module.exports = { fetchBreed };