import { VStack, Heading, Input, Text, Box, Center, Container } from '@chakra-ui/react';
import { NFTCard } from 'components/modules';
import { Carousel } from 'react-responsive-carousel';
import data from './data.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { NFTCardCarousel } from 'components/modules/NFTCardCarousel';

const Home = () => {
  return (
    <>
      <Center
        width={'100%'}
        backgroundImage="url('./Scandinavian-Home-Exterior20.png')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        minHeight={'756px'}
      >
        <VStack w={'full'} spacing={20}>
          <Heading as="h2" size="2xl" marginBottom={6} color={'#FDFDFD'}>
            Discover new opportunities
          </Heading>
          <Input
            placeholder="Search locations"
            width={'25%'}
            maxWidth={'320px'}
            borderColor="#FFA500"
            bgColor={'primary'}
            color={'#AEAEAE'}
          />
          <Text fontSize="3xl" color={'#FDFDFD'}>
            We help people invest in property
          </Text>
        </VStack>
      </Center>
      <Container pt={4}>
        <Carousel autoPlay={true} showArrows={false}>
          {data.map((balance, key) => (
            <NFTCardCarousel {...balance} key={key} />
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default Home;
