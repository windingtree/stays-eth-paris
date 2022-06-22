import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import type { Breadcrumb } from '../components/Breadcrumbs';
import { useContext } from 'react';
import { Anchor, Box, ResponsiveContext } from 'grommet';
import { useAppState } from '../store';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MessageBox } from '../components/MessageBox';
import { getNetwork } from '../config';
import { isMobile, browserName } from 'react-device-detect';

const { name: allowedNetworkName } = getNetwork();

export interface PageWrapperProps {
  children: ReactNode;
  breadcrumbs?: Breadcrumb[];
}

export const PageWrapper = ({ children, breadcrumbs }: PageWrapperProps) => {
  const size = useContext(ResponsiveContext);
  const { isRightNetwork } = useAppState();
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener('ethereum#initialized', handleEthereum, {
        once: true,
      });

      // If the event is not dispatched by the end of the timeout,
      // the user probably doesn't have MetaMask installed.
      setTimeout(handleEthereum, 3000); // 3 seconds
    }

    function handleEthereum() {
      const { ethereum } = window;
      if (ethereum && ethereum.isMetaMask) {
        console.log('Ethereum successfully detected!');
        // Access the decentralized web!
        setIsSupported(true)
      } else {
        setIsSupported(false)
        console.log('Please install MetaMask!');
      }
    }
  }, [])

  return (
    <Box>
      <Box
        margin={{ left: 'auto', right: 'auto', bottom: 'xlarge' }}
        pad={{ horizontal: 'small' }}
        width={{ width: '100%', max: '1090px' }}
      >
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          size={size}
        />
        <MessageBox type='warn' show={!isRightNetwork}>
          You are connected to a wrong network. Please switch to: {allowedNetworkName}
        </MessageBox>
        <MessageBox type='warn' show={!isSupported && isMobile}>
          Mobile {browserName} does not support web3 apps. Open with <Anchor label='metamask' href={`https://metamask.app.link/dapp/${window.location.href}`} />
        </MessageBox>
        <MessageBox type='warn' show={!isSupported && !isMobile}>
          {browserName} does not support web3 apps. <Anchor label='Check options' href='https://metamask.io' />
        </MessageBox>
        {children}
      </Box>
    </Box>
  );
};
