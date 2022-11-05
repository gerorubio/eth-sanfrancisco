import {
  Box,
  HStack,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  Center,
  Stack,
  Flex,
  Spacer,
  Heading,
  VStack,
  Select,
  Button,
} from '@chakra-ui/react';
import { Eth } from '@web3uikit/icons';
import { FC } from 'react';
import { resolveIPFS } from 'utils/resolveIPFS';
import { INFTCard } from './types';
import { MdOutlinePlace } from 'react-icons/md';

const NFTCard: FC<INFTCard> = ({ amount, contractType, name, symbol, metadata }) => {
  const bgColor = useColorModeValue('none', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const descBgColor = useColorModeValue('gray.100', 'gray.600');

  return (
    <Box maxWidth="315px" bgColor={bgColor} padding={3} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>
      <Box maxHeight="260px" overflow={'hidden'} borderRadius="xl">
        <Image
          src={resolveIPFS(metadata?.image as string)}
          alt={'nft'}
          minH="260px"
          minW="260px"
          boxSize="100%"
          objectFit="fill"
        />
      </Box>
      {/* Direction */}
      <HStack mt={2} align="center">
        <MdOutlinePlace color="#969696" />
        <Text as="b" color={'#969696'}>
          {name}
        </Text>
      </HStack>
      {/* Price */}
      <Center>$560,000</Center>
      {/* Info about rooms and size */}
      <Box w={'75%'} margin={'auto'}>
        <Flex>
          <Text color="#969696">3 beds</Text>
          <Spacer />
          <Text color="#969696">2 baths</Text>
          <Spacer />
          <Text color="#969696">2,012 sqft</Text>
        </Flex>
      </Box>
      {/* Price */}
      <SimpleGrid columns={2} spacing={4} padding={2.5} borderRadius="xl" marginTop={2}>
        <Text color="#969696">Down payment</Text>
        <Text color="#969696">$10,000 USDC</Text>
        <Text color="#969696">Interest Rate</Text>
        <Text color="#969696">%7.5</Text>
        <Text color="#969696">Credit Score</Text>
        <Text color="#969696">768</Text>
        <Text color="#969696">Value</Text>
        <Text color="#969696">$1.3M</Text>
      </SimpleGrid>
      {/* Invest */}
      <VStack>
        <Center>
          <Heading color="#969696" size="md">
            PRECENTAGE TO INVEST
          </Heading>
        </Center>
        <Select width={'50%'} bgColor={'#E6E6E6'} color={'#FFA500'} style={{ fontWeight: 'bold' }}>
          <option style={{ textAlign: 'center', fontWeight: 'bold' }} value="option1">
            5%
          </option>
          <option style={{ textAlign: 'center', fontWeight: 'bold' }} value="option2">
            10%
          </option>
          <option style={{ textAlign: 'center', fontWeight: 'bold' }} value="option3">
            15%
          </option>
        </Select>
        <Button bgColor={'#FFA500'} color={'#FEFEFE'} borderRadius={'1rem'} width="75%">
          Invest Now
        </Button>
      </VStack>
    </Box>
  );
};

export default NFTCard;
