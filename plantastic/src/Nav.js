import { Flex, Text, Button } from '@chakra-ui/react';

function Navbar() {

  return (
    <Flex bg='#76B947' color='white' height='5vh' position='sticky'>
      <Text fontSize='4xl' fontWeight='bold' alignSelf='center'>Plantastic</Text>
      <Button ml='75vw' alignSelf='center' variant='outline'>Log In</Button>
    </Flex>
  )
};

export default Navbar;