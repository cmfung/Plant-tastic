const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
const { Schema } = mongoose;

const imageSchema = new Schema({
  plant_id: { type: Number, unique: true, required: true },
  plant_name: { type: String, required: true },
  img_url: { type: String, required: true }
});