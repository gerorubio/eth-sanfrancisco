import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import { NFTCard } from 'components/modules';
import { FC, useEffect } from 'react';
import { INFTBalances } from './types';

const NFTBalances: FC<INFTBalances> = ({ balances }) => {
  useEffect(() => console.log('balances: ', balances), [balances]);

  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
      <Heading size="lg" marginBottom={6}>
        NFT Balances
      </Heading>
      {balances?.length ? (
        <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={6}>
          {balances.map((balance, key) => (
            <NFTCard {...balance} key={key} />
          ))}
        </Grid>
      ) : (
        <Box>Looks Like you do not have any NFTs</Box>
      )}
    </div>
  );
};

export default NFTBalances;
