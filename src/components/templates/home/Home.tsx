import { VStack, Heading, Input, Text, Box, Container, Center } from '@chakra-ui/react';

const Home = () => {
  return (
    <Center
      width={'100%'}
      backgroundImage="url('./Scandinavian-Home-Exterior20.png')"
      backgroundSize={'cover'}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minHeight={'756px'}
    >
      <VStack w={'full'} spacing={20}>
        <Heading as="h2" size="2xl" marginBottom={6} color={'#FEFEFE'}>
          Discover new opportunities
        </Heading>
        <Input
          placeholder="Search locations"
          width={'25%'}
          maxWidth={'320px'}
          borderColor="#FFA500"
          bgColor={'#FEFEFE'}
          color={'#AEAEAE'}
        />
        <Text fontSize="3xl" color={'#FEFEFE'}>
          We help people invest in property
        </Text>
      </VStack>
    </Center>
  );
};

export default Home;
