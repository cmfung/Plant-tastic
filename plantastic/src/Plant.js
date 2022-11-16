import {
  Box
} from '@chakra-ui/react';


function PlantCard({ plant }) {
  if (plant) {
    return (
      <Box
      w={'50vw'}
      ratio={'4:3'}
      boxShadow={'2xl'}
      >
        <div>Common Name: {plant.common[1] ? plant.common[1] : plant.common[0]}</div>
        <div>Latin Name: {plant.latin}</div>
        <div>Family: {plant.family}</div>
        <div>Category: {plant.category}</div>
        <div>Origin: {plant.origin}</div>
        <div>Temperature Range: {plant.tempmin.fahrenheit}-{plant.tempmax.fahrenheit} &#8457;</div>
        <div>Ideal Light: {plant.ideallight}</div>
        <div>Watering Instructions: {plant.watering}</div>
      </Box>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default PlantCard;