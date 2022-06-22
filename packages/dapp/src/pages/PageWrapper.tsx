import type { ReactNode } from 'react';
import type { Breadcrumb } from '../components/Breadcrumbs';
import { useContext } from 'react';
import { Anchor, Box, ResponsiveContext } from 'grommet';
import { useAppState } from '../store';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MessageBox } from '../components/MessageBox';
import { getNetwork } from '../config';
import { isMobile, isSafari } from 'react-device-detect';
import { useLocation } from 'react-router-dom';

const { name: allowedNetworkName } = getNetwork();

export interface PageWrapperProps {
  children: ReactNode;
  breadcrumbs?: Breadcrumb[];
}

export const PageWrapper = ({ children, breadcrumbs }: PageWrapperProps) => {
  const size = useContext(ResponsiveContext);
  const { pathname } = useLocation();
  const { isRightNetwork } = useAppState();
  return (
    <Box>
      <Box
        margin={{ left: 'auto', right: 'auto', bottom: 'large' }}
        pad={{ horizontal: 'small' }}
        width={{ width: '100%', max: '1090px' }}
      >
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          size={size}
        />
        <Box
          style={pathname === '/' ? {
            position: 'absolute',
            left: '5vw',
            width: '90vw'
          } : {}}
        >
          <MessageBox type='warn' show={!isRightNetwork}>
            You are connected to a wrong network. Please switch to: {allowedNetworkName}
          </MessageBox>
          <MessageBox type='warn' show={isMobile}>
            Browser does not support dApp. Open dApp with <Anchor label='metamask' href={`https://metamask.app.link/dapp/${window.location.href}`} />
          </MessageBox>
          <MessageBox type='warn' show={isSafari && !isMobile}>
            Browser does not support dApp. <Anchor label='Check options' href='https://metamask.io' />
          </MessageBox>
        </Box>
        {children}
      </Box>
    </Box>
  );
};
