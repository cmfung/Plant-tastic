require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 4001;

const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))