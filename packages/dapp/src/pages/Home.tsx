import { useMemo, useState } from 'react';
import { Box, Spinner, Text } from 'grommet';
import { useAppState } from '../store';
import { PageWrapper } from '../pages/PageWrapper';
import { MessageBox } from '../components/MessageBox';
import { SearchForm } from '../components/search/SearchForm';
import styled from 'styled-components';

const SEARCH_FORM_DISABLED = process.env.REACT_APP_SEARCH_FORM_DISABLED;

export const GradientText = styled(Text)`
  font-size: 2.9em;
  line-height: 1.36em;
  font-weight: 900;
  text-align: center;
  font-family: Inter;
  background: linear-gradient(to right, #68bab7, #cc0033, #be8747, #c5393f, #5312a8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CustomText = styled(Text)`
  
  line-height: 1.36em;
  font-weight: 900;
  text-align: center;
  font-family: Inter;
  color: white;
  // background: linear-gradient(to right, #68bab7, #cc0033, #be8747, #c5393f, #5312a8);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
`;

export const CustomLink = styled(Text)`
  font-size: 1.5em;
  line-height: 1.36em;
  font-weight: 600;
  text-align: center;
  font-family: Arial;
`;

export const Home = () => {
  const {
    isIpfsNodeConnecting,
    isBootstrapLoading,
    bootstrapped
  } = useAppState();
  const [searchFormDisabled] = useState<boolean>((SEARCH_FORM_DISABLED === 'true'));

  const isReady = useMemo(
    () => !isIpfsNodeConnecting && !isBootstrapLoading,
    [isIpfsNodeConnecting, isBootstrapLoading]
  );

  const futureConferences = [
    { name: 'Prague', link: 'https://ethprague.com/', when: '10-12 June' },
    { name: 'Barcelona', link: 'https://ethbarcelona.com/', when: '6-7 July' },
    { name: 'Paris', link: 'https://ethcc.io/', when: '19-21 July' },
    { name: 'Bogota', link: 'https://devcon.org/en/#road-to-devcon', when: '11-14 October' },
  ];

  return (
    <PageWrapper>
      <Box align='center' margin={{ bottom: 'large', top: 'large' }}>
        <CustomText size='3.5rem'>
          Book your stay on-chain.
        </CustomText>
        <CustomText size='3.5rem'>
          Check-in with your NFT.
        </CustomText>
        <CustomText size='1.5rem'>
          ETHBarcelona - July 6-8
        </CustomText>
    
      </Box>

      {(isIpfsNodeConnecting || isBootstrapLoading) &&
        <Spinner color='accent-2' alignSelf='center' size='large' margin={{ top: 'large' }} />
      }

      <MessageBox type='error' show={isReady && !!!bootstrapped}>
        <Text>
          💔 Uh-oh... The app couldn't sync with the smart contract. Try refreshing the page? 💔
        </Text>
      </MessageBox>

      {
        !searchFormDisabled &&
        isReady &&
        !!bootstrapped &&
        <SearchForm />
      }
    </PageWrapper>
  );
};
