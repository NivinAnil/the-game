import axios from "axios";

const getRandomGameData = async () => {
  const totalPages = 50;
  const page = Math.floor(Math.random() * totalPages + 1);
  const apiKey = process.env.KEY;
  var config = {
    method: "get",
    url: `https://api.rawg.io/api/games?key=2335a379b5fe41948a10fad8d1bf5afb&page=${page}`,
    headers: {},
  };
  var result = {};

  await axios(config)
    .then(function async(response) {
      const { results } = response.data;
      const index = Math.floor(Math.random() * results.length + 1);
      result = results[index];
    })
    .catch(function (error) {
      console.log(error);
    });

  return {
    imgUrl: result.background_image,
    released: result.released,
    name: result.name,
    rating: result.rating,
    platforms: result.platforms,
  };
};
export default getRandomGameData;
