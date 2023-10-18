const { fetchBreed } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreed(breedName, (error, description) => {
  if (error) {
    console.error(error);
  } else {
    console.log(description);
  }
});