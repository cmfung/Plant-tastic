const axios = require('axios');
const models = require('../models/models')
const _ = require('underscore');

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
  // can comment out not needed regularly. Just manipulating results to return specific arrays.
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
          commonNames.push(plant.category)
          commonNames = _.uniq(commonNames);
        });
        res.send(commonNames);
      })
      .catch((err) => console.log(err));
  },
  getAllUsers: (req, res) => {
    models.getAll()
      .then((data) => res.status(200).send(data))
      .catch((err) => console.log(err));
  },
  addNewUser: (req, res) => {
    console.log(req.body)
    models.addNewUser(req.body)
      .then(() => res.sendStatus(201))
      .catch((err) => console.log(err));
  },
  addToOwned: (req, res) => {
    console.log('PARAMS', req.query);
    models.addToOwned(req.query)
      .then(() => res.sendStatus(201))
      .catch((err) => console.log(err));
  },
  addToWishList: (req, res) => {
    console.log(req.query);
    models.addToWishList(req.query)
      .then(() => res.sendStatus(201))
      .catch((err) => console.log(err));
  },
  // write a route that rips everything from the api and then iterates over each value and adds it to the mongo database
  ripToMongo: (req, res) => {
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
        // response.data.forEach((plant) => {
        //   const newPlant = {
        //     plant_id: plant.plant_id,
        //     latin: plant.latin,
        //     family: plant.family,
        //     common: plant.common,
        //     category: plant.category,
        //     origin: plant.origin,
        //     climate: plant.climate,
        //     tempmax: plant.tempmax.fahrenheit,
        //     tempmin: plant.tempmin.fahrenheit,
        //     ideallight: plant.ideallight,
        //     toleratedlight: plant.toleratedlight,
        //     watering: plant.watering,
        //     insects: plant.insects,
        //     diseases: plant.diseases,
        //     use: plant.use
        //   };
        // })
        models.insertMany(response.data)
          .then(() => res.sendStatus(201))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  },
  getMongoPlants: (req, res) => {
    models.getMongoPlants()
      .then((data) => res.status(200).send(data))
      .catch((err) => console.log(err));
  }
}