import type { providers } from 'ethers';
import type { IPFS } from '@windingtree/ipfs-apis';
import { useState, useCallback, useEffect } from 'react';
import { DateTime } from 'luxon';
import { useContract } from './useContract';
import Logger from '../utils/logger';

// Initialize logger
const logger = Logger('useDayZero');

export type UseDayZeroHook = [
  getDate: (days: number) => DateTime,
  isReady: boolean,
  error: string | undefined
];

export const useDayZero = (
  provider: providers.JsonRpcProvider | undefined,
  ipfsNode: IPFS | undefined
): UseDayZeroHook => {
  const [contract,,] = useContract(provider, ipfsNode);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [dayZero, setDayZero] = useState<number | undefined>();
  const [error, setError] = useState<string | undefined>();

  const getDayZero = useCallback(
    async () => {
      if (!contract) {
        setIsReady(false);
        return;
      }
      try {
        setError(undefined);
        setIsReady(false);
        const dz = await contract.getDayZero();
        setDayZero(dz);
        setIsReady(true);
      } catch (err) {
        logger.error(err);
        const message = (err as Error).message || 'Unknown useDayZero error';
        setError(message);
        setIsReady(false);
      }
    },
    [contract]
  );

  const getDate = useCallback(
    (days: number) => {
      if (!dayZero) {
        throw new Error('getDate utility is not ready');
      }
      logger.debug('getDate params', dayZero, days);
      return DateTime.fromMillis(
        (dayZero * 1000) + days * 86400 * 1000
      );
    },
    [dayZero]
  );

  useEffect(
    () => {
      getDayZero();
      return () => {
        setIsReady(false);
        setDayZero(undefined);
      }
    },
    [getDayZero]
  );

  return [
    getDate,
    isReady,
    error
  ];
};