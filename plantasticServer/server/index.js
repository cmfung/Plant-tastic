require('dotenv').config();
const express = require('express');
const cors = require('cors');
const controllers = require('./controllers/controllers');

const PORT = process.env.PORT || 4001;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/plants', controllers.getAll);
app.get('/plantNames', controllers.getPlantNames);
app.get('/plant/:plantName', controllers.getByName);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))