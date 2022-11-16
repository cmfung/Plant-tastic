import {
  Box,
  Image
} from '@chakra-ui/react';


function PlantCard({ plant }) {
  return (
    <Box flexGrow='1' alignSelf='center' align='center'>
      <Box borderWidth='1px' maxW='500px' borderRadius='3%'>
        <Image
          src='https://silverbirchgardens.co.uk/wp-content/uploads/2021/08/tropical.jpg'
          />
        <Box align='left' p='5px'>
          <Box fontWeight='bold' textTransform='uppercase'>{plant.common[1] ? plant.common[1] : plant.common[0]}</Box>
          <Box fontWeight='bold' textTransform='uppercase'>Latin Name:</Box>
          <Box pl='15px'>{plant.latin}</Box>
          <Box fontWeight='bold' textTransform='uppercase'>Family:</Box>
          <Box pl='15px'>{plant.family}</Box>
          <Box fontWeight='bold' textTransform='uppercase'>Category:</Box>
          <Box pl='15px'>{plant.category}</Box>
          <Box fontWeight='bold' textTransform='uppercase'>Origin:</Box>
          <Box pl='15px'>{plant.origin}</Box>
          <Box fontWeight='bold' textTransform='uppercase'>Temperature Range:</Box>
          <Box pl='15px'>{plant.tempmin.fahrenheit}-{plant.tempmax.fahrenheit} &#8457;</Box>
          <Box fontWeight='bold' textTransform='uppercase'>Ideal Light:</Box>
          <Box pl='15px'>{plant.ideallight}</Box>
          <Box fontWeight='bold' textTransform='uppercase'>Watering Instructions:</Box>
          <Box pl='15px'>{plant.watering}</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PlantCard;