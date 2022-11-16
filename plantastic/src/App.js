import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import axios from 'axios';
// import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './Nav';
import PlantCard from './Plant';
import Sidebar from './Sidebar'
axios.defaults.baseURL = "http://localhost:4000";

function App() {
  const [plant, setPlant] = useState('');

  useEffect(() => {
    axios.get('/plant/threadagave')
      .then((response) => {
        console.log(response.data);
        setPlant(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="App">
      <Navbar />
      <Flex>
        <Sidebar setPlant={setPlant} />
        <PlantCard plant={plant}/>
      </Flex>
    </div>
  );
}

export default App;
