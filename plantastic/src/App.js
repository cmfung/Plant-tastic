import React, { useEffect, useState } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import axios from 'axios';
// import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './Nav';
import PlantCard from './Plant';
import Sidebar from './Sidebar'
axios.defaults.baseURL = "http://localhost:4000";

function App() {
  const [user, setUser] = useState('');
  const [plant, setPlant] = useState({
    "id": 6,
    "latin": "Agave filifera",
    "family": "Amaryllidaceae",
    "common": [
        "Thread Agave",
        "Century plant"
    ],
    "category": "Cactus & Succulent",
    "origin": "Mexico",
    "climate": "Arid Tropical",
    "tempmax": {
        "celsius": 35,
        "fahrenheit": 95
    },
    "tempmin": {
        "celsius": 5,
        "fahrenheit": 41
    },
    "ideallight": "6 or more hours of direct sunlight per day.",
    "toleratedlight": "Direct sunlight.",
    "watering": "Water only when the soil is dry. Must be dry between watering",
    "insects": [
        "Scale",
        "Mealy bug"
    ],
    "diseases": "N/A",
    "use": [
        "Potted plant",
        "Primary",
        "Secondary"
    ]
});

  // useEffect(() => {
  //   axios.get('/plant/threadagave')
  //     .then((response) => {
  //       console.log(response.data);
  //       setPlant(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <ChakraProvider id='Set-cursor'>
      <Navbar user={user} setUser={setUser}/>
      <Flex>
        <Sidebar setPlant={setPlant}/>
        <PlantCard plant={plant}/>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
