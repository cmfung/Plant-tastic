const axios = require('axios');

module.exports = {
  getAll: (req, res) => {
    const options = {
      method: 'GET',
      url: 'https://house-plants.p.rapidapi.com/all',
      headers: {
        'X-RapidAPI-Key': process.env.APIKEY,
        'X-RapidAPI-Host': process.env.APIHOST
      }
    };
    axios.request(options)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => console.log(err));
  },
  getByName: (req, res) => {
    console.log(req.params)
    const options = {
      method: 'GET',
      url: `https://house-plants.p.rapidapi.com/common/${req.params.plantName}`,
      headers: {
        'X-RapidAPI-Key': process.env.APIKEY,
        'X-RapidAPI-Host': process.env.APIHOST
      }
    };
    axios.request(options)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => console.log(err));
  },
  getPlantNames: (req, res) => {
    let commonNames = [];
    const options = {
      method: 'GET',
      url: 'https://house-plants.p.rapidapi.com/all',
      headers: {
        'X-RapidAPI-Key': process.env.APIKEY,
        'X-RapidAPI-Host': process.env.APIHOST
      }
    };
    axios.request(options)
      .then((response) => {
        response.data.forEach((plant) => {
          commonNames = commonNames.concat(plant.common);
        });
        res.send(commonNames);
      })
      .catch((err) => console.log(err));
  },
}