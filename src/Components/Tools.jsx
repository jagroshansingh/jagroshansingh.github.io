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
          src: "https://w7.pngwing.com/pngs/512/824/png-transparent-visual-studio-code-hd-logo-thumbnail.png",
          name: "VSCode",
        }
      ];
  return (
    <div>
        <Heading as={'u'} color={'green'}>Tools</Heading>
      <SimpleGrid
        columns={{ base: 2, sm:3, lg: 5 }}
        border="0px solid"
        spacing="2rem"
        marginTop={5}
      >
        {techData.map((tech,i) => (
          <Box key={i} border={"0px"} m={"auto"} p={5} borderRadius={'10%'} boxShadow={'2xl'}>
            <Image
              border={"0px"}
              boxSize={{ base: '70px', sm:'100px', lg: '120px' }}
              src={tech.src}
              alt={tech.name}
            />
            <Heading size="sm">{tech.name}</Heading>
          </Box>
        ))}

      </SimpleGrid>
    </div>
  )
}
