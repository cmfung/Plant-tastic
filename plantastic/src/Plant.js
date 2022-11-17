import {
  Flex,
  Button,
  Spacer
} from '@chakra-ui/react';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:4000";

function PlantCard({ plant }) {
  const addToOwned = () => {
    const plantName = plant.common[1] ? plant.common[1] : plant.common[0];
    axios.put(`/users/owned?user_name=cfung&plant_name=${plantName}`)
      .then(() => console.log('Successful'))
      .catch((err) => console.log(err));
  }

  const addToWishList = () => {
    const plantName = plant.common[1] ? plant.common[1] : plant.common[0];
    axios.put(`/users/wishlist?user_name=cfung&plant_name=${plantName}`)
      .then(() => console.log('Successful'))
      .catch((err) => console.log(err));
  }

  return (
    <div class='card-container'>
      <div class='flip-card'>
        <div class='flip-inner'>
          <div class='flip-front'>
            <img class='flip-image' src='https://wallpaperaccess.com/full/1464300.jpg' alt='plant'/>
            <div class='image-name'>{plant.common[1] ? plant.common[1] : plant.common[0]}</div>
          </div>
          <div class='flip-back'>
            <div class='plant-title'>{plant.common[1] ? plant.common[1] : plant.common[0]}</div>
            <div class='plant-header'>Latin Name:</div>
            <div class='plant-data'>{plant.latin}</div>
            <div class='plant-header'>Family:</div>
            <div class='plant-data'>{plant.family}</div>
            <div class='plant-header'>Category:</div>
            <div class='plant-data'>{plant.category}</div>
            <div class='plant-header'>Origin:</div>
            <div class='plant-data'>{plant.origin}</div>
            <div class='plant-header'>Temperature Range:</div>
            <div class='plant-data'>{plant.tempmin.fahrenheit}-{plant.tempmax.fahrenheit} &#8457;</div>
            <div class='plant-header'>Ideal Light:</div>
            <div class='plant-data'>{plant.ideallight}</div>
            <div class='plant-header'>Watering Instructions:</div>
            <div class='plant-data'>{plant.watering}</div>
            <Flex>
              <Button mt='15px' ml='25px' bg='#276749' color='white' onClick={() => {addToOwned()}}>Add to Owned</Button>
              <Spacer />
              <Button mt='15px' mr='25px' bg='#276749' color='white' onClick={() => {addToWishList()}}>Add to Wishlist</Button>
            </Flex>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlantCard;