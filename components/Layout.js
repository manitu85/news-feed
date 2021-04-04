import { Flex } from '@chakra-ui/react';
import Header from './Header';

// prettier-ignore
export default function Layout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: '900px' }}
      m="0 auto"
      {...props}
    >
      <Header />
      {props.children}
    </Flex>
  )
}
