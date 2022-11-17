import {
  Box,
  Image
} from '@chakra-ui/react';


function PlantCard({ plant }) {
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlantCard;