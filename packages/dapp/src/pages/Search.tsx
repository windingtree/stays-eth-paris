import { PageWrapper } from './PageWrapper';
import { SearchForm } from '../components/search/SearchForm';
import { Anchor, Box, Spinner, Text } from 'grommet';
import { SearchResultCard } from '../components/search/SearchResultCard';
import { useAppState } from '../store';
import { useSpaceSearch } from '../hooks/useSpaceSearch';
import { useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageBox } from '../components/MessageBox';
import styled from 'styled-components';
import { SpaceRecord } from '../store/actions';
import Logger from '../utils/logger';

const SEARCH_FORM_DISABLED = process.env.REACT_APP_SEARCH_FORM_DISABLED;

// Initialize logger
const logger = Logger('Search');

export const WhiteParagraph = styled(Text)`
  text-align: start;
  align-self: center;
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  max-width: 50rem;
  margin-top: 5rem;
`;

export const WhiteParagraph18 = styled(Text)`
  text-align: start;
  align-self: center;
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  max-width: 50rem;
  margin-top: 2rem;
`;

const checkSpaceDatesRestrictions = (id: string, start: number, days: number) => {
  const restrictions: Record<string, { start: number, end: number, min: number }> = {
    // Staycity, La Défense. Studio Appartment
    '0xb28583856377b80079afd8cb51bd2439f5ed0e0443470e2df87488665b4f265f': {
      start: 147,
      end: 150,
      min: 1
    },
    // Hôtel Plaza Athénée Paris. Superior Room
    '0xdce3ba3d8c69835b4b61cb830e768a0c66719898f88a8d7c98171567b9dc140f': {
      start: 147,
      end: 150,
      min: 1
    },
    // Hyatt Paris Madeleine. Hyatt Queen
    '0x5cf5c7887c34ea17dbd04663cc9f9af1d825d9ce57ed09cd20b6cad2c5191786': {
      start: 147,
      end: 150,
      min: 1
    },
    // Hyatt Paris Madeleine. Hyatt King
    '0xf6893c2b472af336b101b8c8b7a7e75bfe01bfff57d03354417a7390b256760d': {
      start: 147,
      end: 150,
      min: 1
    },

    // Hoy Paris Single Room
    '0xd58f0074f20cfa887f168ec9ee23201a230fe9633de250c566559aa9e981570f': {
      start: 146,
      end: 150,
      min: 1
    },
    // Hoy Paris Double Room
    '0x6a6c618a5dbccae72ce785065ea1d6435532e04c76ebf427aa6f6b955080dad7': {
      start: 146,
      end: 150,
      min: 1
    },
  };

  if (restrictions[id]) {
    const startRule = start >= restrictions[id].start;
    const endRule = (start + days) <= restrictions[id].end;
    const minRule = days >= restrictions[id].min;
    return startRule && endRule && minRule;
  }

  return true;
};

export const Search = () => {
  console.log("Search :: start")

  const { searchSpaces } = useAppState();
  const { search } = useLocation();

  const { startDay, numberOfDays, roomsNumber } = useMemo(() => {
    const params = new URLSearchParams(search);
    const startDay = Number(params.get('startDay'));
    const numberOfDays = Number(params.get('numberOfDays'));
    const roomsNumber = Number(params.get('roomsNumber'));
    return {
      startDay,
      numberOfDays,
      roomsNumber
    }
  }, [search])

  const [loading, noResults, error] = useSpaceSearch(startDay, numberOfDays, roomsNumber);
  const [searchActivated, setSearchActivated] = useState<boolean>(false);
  const [afterLoading, setAfterLoading] = useState<boolean>(false);
  const [filteredSpaces, setFilteredSpaces] = useState<SpaceRecord[]>([]);
  const [searchFormDisabled] = useState<boolean>((SEARCH_FORM_DISABLED === 'true'));

  useEffect(
    () => {
      if (!loading) {
        setTimeout(() => setAfterLoading(false), 1000);
      } else {
        setSearchActivated(true);
        setAfterLoading(true);
      }
    },
    [loading]
  );

  useEffect(
    () => {
      if (
        (!searchSpaces || !searchSpaces.length) ||
        (roomsNumber === 0)
      ) {
        logger.debug('Reset filtered spaces: search result is empty');
        setFilteredSpaces([]);
        return;
      }

      const filtered = searchSpaces.filter(
        (space: SpaceRecord) => space.available &&
          space.available >= roomsNumber &&
          checkSpaceDatesRestrictions(space.id, startDay, numberOfDays)
      );
      logger.debug('Filtered spaces', filtered);

      setFilteredSpaces(filtered);

      return () => {
        logger.debug('Reset filtered spaces: dependencies changed');
        setFilteredSpaces([]);
      };
    },
    [searchSpaces, startDay, numberOfDays, roomsNumber]
  );

  return (
    <PageWrapper>
      <Box align='center' margin={{ bottom: 'small' }}>
        <Text size='3rem'>Ethereum Community Conference</Text>
        <Text size='xlarge'>
          July 16 - 21
        </Text>
      </Box>

      {
        !searchFormDisabled &&
        <Box margin={{ bottom: 'medium' }}>
          <SearchForm
            startDay={startDay}
            numberOfDays={numberOfDays}
            initRoomsNumber={roomsNumber}
          />
        </Box>
      }

      <MessageBox type='error' show={!!error}>
        <Box direction='row'>
          <Box>
            {error}
          </Box>
        </Box>
      </MessageBox>

      {loading || afterLoading ? <Spinner color='black' alignSelf='center' size='medium' /> : null}

      <MessageBox type='info' show={
        searchActivated &&
        !afterLoading &&
        (noResults || filteredSpaces.length === 0)
      }>
        <Text>
          No Rooms Found, this could be due to a few reasons:
        </Text>
        <Text>
          1 - There are no rooms for this period, try different dates
        </Text>
        <Text>
          2 - Clear you cookies and cache and try again (<a style={{ fontWeight: 600, color: 'black' }} href='https://support.google.com/accounts/answer/32050?hl=en&co=GENIE.Platform%3DDesktop'>see how?</a>)
        </Text>
      </MessageBox>

      <Box direction='row' justify='between' align='center'>
        <Box direction='row' justify='end' align='center'>
          <Text color='red'>Not sure how to book?</Text>
          <Anchor
            style={{
              textAlign: 'center',
              lineHeight: '2.5rem',
              fontSize: '0.75rem',
              height: '2.5rem',
              background: 'black',
              color: 'white',
              borderRadius: '2.5rem',
              minWidth: '9rem',
              marginLeft: '0.25rem'
            }}
            label='Read our Guides'
            target="_blank"
            href='https://win-guides.super.site/'
          />
        </Box>
        <Text textAlign='center' size='1rem'>The listings are ranked randomly</Text>
      </Box>

      <Box border={{
        color: 'black',
        side: 'top',
        size: '1.5px ',
      }}
        margin={{ top: 'small' }}
      >
        {filteredSpaces.map((space) =>
          <SearchResultCard
            key={space.contractData.spaceId}
            space={space}
            numberOfDays={numberOfDays}
            roomsNumber={roomsNumber}
          />
        )}
      </Box>
    </PageWrapper >
  );
};
