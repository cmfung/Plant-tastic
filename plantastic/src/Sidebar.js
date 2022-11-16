import { Box } from '@chakra-ui/react';
import PlantList from './PlantList'
import PlantListItem from './PlantListItem'

function Sidebar({ setPlant }) {
  return (
    <Box position='sticky' height='95vh' overflow='auto' width='200px' pl='5px' color='#276749'>
      {PlantList.map((plant) => (
        <PlantListItem setPlant={setPlant} plant={plant} key={plant} />
      ))}
    </Box>
  )
};

export default Sidebar;