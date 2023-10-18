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
      callback(error, null);
    } else {
      try {
        const data = JSON.parse(body);
        if (data.length === 0) {
          callback(null, null);
        } else {
          callback(null, data[0].description);      
        }
      } catch (err) {
        callback(err, null);
      }
    }
  });
};

module.exports = { fetchBreed };