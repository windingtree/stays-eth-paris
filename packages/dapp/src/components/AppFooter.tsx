import { Image, Text, Box, Footer, Anchor } from 'grommet';
import { useLocation } from 'react-router-dom';

export const AppFooter = () => {
  const location = useLocation();
  const color = location.pathname === '/' ? 'white' : 'black'

  return (
    <Footer
      responsive={true}
      justify='between'
      margin={{ left: 'auto', right: 'auto', bottom: 'xlarge' }}
      pad={{ horizontal: 'small' }}
      width={{ width: '100%', max: '900px' }}
      direction='column'
    >
      <Box align='center' margin={{ bottom: 'small' }}>
        <Text color={color} size='large'>
          Created with 💖 for <a style={{ filter: location.pathname === '/' ? 'brightness(0) invert(1)' : 'brightness(0)' }} href="https://ethcc.io/">EthCC</a> and <a style={{ filter: location.pathname === '/' ? 'brightness(0) invert(1)' : 'brightness(0)' }} href="https://metaverse-summit.org/">Paris Metaverse Summit</a>
        </Text>
        <Text color={color} size='large'>
          July 19&ndash;21, Paris
        </Text>
      </Box>

      <Box color={color} align='center' direction='row'>
        <Anchor
          color={color}
          icon={<Image
            style={{
              filter: location.pathname === '/' ? 'brightness(0) invert(1)' : 'brightness(0)'
            }}
            src='https://raw.githubusercontent.com/windingtree/branding/master/winding-tree/svg/winding-tree-symbol-dark.svg' height='32px'
          />}
          href='https://windingtree.com'
          title='Powered by Winding Tree'
          target="_blank"
        />
        <Anchor
          icon={<Image
            style={{
              filter: location.pathname === '/' ? 'brightness(0) invert(1)' : 'brightness(0)'
            }}
            src='/discord-logo.svg'
            height='32px'
          />}
          href='https://discord.gg/RWqqzT3Gf8'
          target="_blank"
          title='Join our Discord to Learn More'
        />
        <Anchor
          icon={<Image
            style={{
              filter: location.pathname === '/' ? 'brightness(0) invert(1)' : 'brightness(0)'
            }}
            src='/twitter.svg' height='32px'
          />}
          href='https://twitter.com/windingtree'
          target="_blank"
          title='Follow Winding Tree on Twitter'
        />
      </Box>
    </Footer>
  );
};
