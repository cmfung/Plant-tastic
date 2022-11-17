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
  }
}