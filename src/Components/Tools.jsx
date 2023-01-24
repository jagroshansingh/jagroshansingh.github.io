import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react'

export const Tools = () => {
    const techData = [
        {
          src: "https://sainraghuveer.github.io/static/media/git.f67bf83802ae8462b585.jpg",
          name: "Git",
        },
        {
          src: "https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg",
          name: "GitHub",
        },
        {
          src: "https://sparkcdneus2.azureedge.net/sparkimageassets/XP9KHM4BK9FZ7Q-63e59db4-cf83-46b7-9365-0c37221b94de",
          name: "VSCode",
        },
        {
          src:"https://s3.eu-west-1.amazonaws.com/niice-cms/2021/03/02/603ec20dc80e6codesandbox-1.png",
          name:"CodeSandbox"
        },
        {
          src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/800px-Npm-logo.svg.png",
          name:"npm"
        }
      ];
  return (
    <div>
        <Heading border={'0px'} marginTop={'3%'}>Tools</Heading>
      <SimpleGrid
        columns={{ base: 2, sm:3, lg: 5 }}
        border="0px solid"
        spacing="2rem"
        marginTop={'2%'}
      >
        {techData.map((tech,i) => (
          <Box key={i} border={"0px"} m={"auto"} p={5} borderRadius={'10%'} boxShadow={'2xl'}>
            <Image
              border={"0px"}
              boxSize={{ base: '90px', sm:'100px', lg: '120px' }}
              src={tech.src}
              alt={tech.name}
              objectFit={'contain'}
            />
            <Heading size={{base:'xs', md:'sm'}} marginTop={'5%'}>{tech.name}</Heading>
          </Box>
        ))}

      </SimpleGrid>
    </div>
  )
}
