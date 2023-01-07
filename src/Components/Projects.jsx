import { Box, Button, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'



export const Projects = () => {
  return (
    <div id='projects'>
      <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
        <Box bg='grey' height='auto'>
          <Image width='100%' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt='Project'/>
          <Heading as='h2' size='xl'>Infinity Mail</Heading>
          <Heading as='h4' size='md'>Clone-Mailtrap.io</Heading>
          <Text>Dummy SMTP service provider for e-mail testing.</Text>
          <Text><b>Tech Stack</b>: HTML, CSS, JavaScript</Text>
          <Box display='flex' justifyContent='space-around'>
          <Button colorScheme='teal' variant='solid'>Github</Button>
          <Button colorScheme='red' variant='solid'>Deployed</Button>
          </Box>
        </Box>
        <Box bg='grey' height='auto'></Box>
        {/* <Box bg='grey' height='auto'></Box>
        <Box bg='grey' height='auto'></Box>
        <Box bg='grey' height='auto'></Box> */}
      </SimpleGrid>
    </div>
  )
}
