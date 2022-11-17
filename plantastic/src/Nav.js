import { Flex, Text, Button } from '@chakra-ui/react';

function Navbar() {

  return (
    <Flex bg='#76B947' color='white' height='5vh' position='sticky'>
      <Text fontSize='4xl' fontWeight='bold' alignSelf='center' ml='30px' >Plantastic</Text>
      <Button ml='65vw' alignSelf='center' variant='outline'>Log In</Button>
      <Button ml='10px' alignSelf='center' variant='outline'>Sign Up</Button>
    </Flex>
  )
};

export default Navbar;