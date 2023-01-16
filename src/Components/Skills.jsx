import { Box, Center, Heading, Image, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'

export const Skills = () => {
  return (
    <div id='skills'>
      <Center><Heading>Tech Stacks</Heading></Center>
      <SimpleGrid  columns={{base:2,md:4}} border='0px solid' spacing='1rem 4rem'>
        <Box border='0px solid' >
          <Image
            borderRadius='full'
            boxSize='150px'
            src='https://cdn3d.iconscout.com/3d/free/thumb/html-5728485-4781249.png'
            alt='HTML_logo'
            
          />
          <Heading size='sm'>HTML</Heading>
        </Box>
        <Box>
          <Image
            borderRadius='full'
            boxSize='150px'
            src='https://cdn3d.iconscout.com/3d/premium/thumb/css-file-5684004-4734968.png'
            alt='Css_logo'
          />
          <Heading size='sm'>CSS</Heading>
        </Box>
        <Box>
          <Image
            borderRadius='full'
            boxSize='150px'
            src='https://cdn3d.iconscout.com/3d/free/thumb/javascript-logo-6563586-5453022.png'
            alt='JavaScript_logo'
          />
          <Heading size='sm'>JavaScript</Heading>
        </Box>
        <Box>
          <Image
            borderRadius='full'
            boxSize='150px'
            src='https://everythingiknows.com/wp-content/uploads/2022/04/node-js-new.png'
            alt='NodeJs_logo'
          />
          <Heading size='sm'>NodeJS</Heading>
        </Box>
      </SimpleGrid>
    </div>
  )
}
