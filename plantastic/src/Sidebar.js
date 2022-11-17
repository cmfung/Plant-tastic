import { Box } from '@chakra-ui/react';
import PlantList from './PlantList'
import PlantListItem from './PlantListItem'

function Sidebar({ setPlant }) {
  return (
    <Box position='sticky' height='95vh' overflow='auto' width='250px' pl='10px' bg='#36454F' color='white' fontSize='lg' >
      {PlantList.map((plant) => (
        <PlantListItem setPlant={setPlant} plant={plant} key={plant} />
      ))}
    </Box>
  )
};

export default Sidebar;