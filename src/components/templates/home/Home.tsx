import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons';
import { VStack, Heading, Input, Text, Box, Container } from '@chakra-ui/react';
import House from './Scandinavian-Home-Exterior20.png';

const Home = () => {
  return (
    <Container
      minWidth={'100%'}
      backgroundImage="url('./Scandinavian-Home-Exterior20.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <VStack w={'full'}>
        <Heading as="h2" size="2xl" marginBottom={6}>
          Discover new opportunities
        </Heading>
        <Input placeholder="Basic usage" />
        <Text fontSize="3xl">We help people invest in property</Text>
      </VStack>
    </Container>
  );
};

export default Home;
