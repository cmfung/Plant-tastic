const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
const { Schema } = mongoose;

const imageSchema = new Schema({
  plant_id: { type: Number, unique: true, required: true },
  plant_name: { type: String, required: true },
  img_url: { type: String, required: true }
});

const plants = new Schema({
  id: { type: Number, required: true },
  latin: { type: String },
  family: { type: String },
  common: { type: [String] },
  category: { type: String },
  origin: { type: String },
  climate: { type: String },
  tempmax: { type: {} },
  tempmin: { type: {} },
  ideallight: { type: String },
  toleratedlight: { type: String },
  watering: { type: String },
  insects: { type: [String] },
  diseases: { type: [String] },
  use: { type: [String] }
})

const Plants = mongoose.model('Plants', plants);

const userList = new Schema({
  user_name: { type: String, required: true },
  user_owned: { type: [String] },
  user_wanted: { type: [String] }
})

const UserOwned = mongoose.model('UserOwned', userList)

module.exports.Plants = Plants;
module.exports.serOwned = UserOwned;