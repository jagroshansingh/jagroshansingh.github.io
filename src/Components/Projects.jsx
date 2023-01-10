import { Box, Button, Heading, Image, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'



export const Projects = () => {
  const navigate=useNavigate()
  return (
    <div id='projects'>
      <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
        <Box bg='grey' height='auto'>
          <Image width='100%' src='/InfinityMail_LandingPage.png' alt='Project'/>
          <Heading as='h2' size='xl'>Infinity Mail</Heading>
          <Heading as='h4' size='md'>Clone-Mailtrap.io</Heading>
          <Text>Dummy SMTP service provider for e-mail testing.</Text>
          <Text><b>Tech Stack</b>: HTML, CSS, JavaScript</Text>

          <Box display='flex' justifyContent='space-around'>
          <Link href='https://github.com/randomFrisby/spotty-butter-9254'><Button colorScheme='teal' variant='solid'>Github</Button></Link>
          <Link href='https://marvelous-starlight-49c422.netlify.app/'><Button colorScheme='red' variant='solid'>Deployed</Button></Link>
          </Box>
        </Box>
        <Box bg='grey' height='auto'>
          <Image width='100%' src='/Orbitz_LandingPage.png' alt='Project'/>
          <Heading as='h2' size='xl'>BA..e(Be As You Are)</Heading>
          <Heading as='h4' size='md'>Clone-Orbitz.com</Heading>
          <Text>Travel booking service, explicitly for the LGBTQ+ community.</Text>
          <Text><b>Tech Stack</b>: React, Chakra-Ui=I, HTML/CSS, JavaScript</Text>

          <Box display='flex' justifyContent='space-around'>
          <Link href='https://github.com/jagroshansingh/cute-hand-680'><Button colorScheme='teal' variant='solid'>Github</Button></Link>
          <Link href='https://effortless-fenglisu-0041ef.netlify.app//'><Button colorScheme='red' variant='solid'>Deployed</Button></Link>
          </Box>
        </Box>
        {/* <Box bg='grey' height='auto'></Box>
        <Box bg='grey' height='auto'></Box>
        <Box bg='grey' height='auto'></Box> */}
      </SimpleGrid>
    </div>
  )
}
