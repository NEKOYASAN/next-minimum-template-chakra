import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box bg={'white'}>
      <Box px={{ lg: 8, base: 6 }} py={{ sm: 32, base: 24 }}>
        <Box mx={'auto'} maxWidth={'2xl'} textAlign={'center'}>
          <Heading
            as={'h2'}
            fontSize={{ sm: '4xl', base: '3xl' }}
            fontWeight={'bold'}
            color={'gray.900'}
          >
            テストメッセージです
            <br />
            Boost your productivity.
            <br />
            Start using our app today.
          </Heading>
          <Text mx={'auto'} mt={6} maxWidth={'xl'} fontSize={'lg'} color={'gray.600'}>
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua
            proident excepteur commodo do ea.
          </Text>
          <Flex mt={10} alignItems={'center'} justifyContent={'center'} gap={6}>
            <Button as={'a'} href={'#'} colorScheme={'purple'}>
              Get Started
            </Button>
            <Button as={'a'} href={'#'}>
              Learn more <span aria-hidden="true">→</span>
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
