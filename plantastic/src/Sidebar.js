// import { Flex } from '@chakra-ui/react';
import PlantList from './PlantList'
import PlantListItem from './PlantListItem'

function Sidebar({ setPlant }) {
  return (
    <div>
      {PlantList.map((plant) => (
        <PlantListItem setPlant={setPlant} plant={plant} key={plant} />
      ))}
    </div>
  )
};

export default Sidebar;