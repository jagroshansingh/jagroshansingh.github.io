import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React from "react";

export const Skills = () => {
  const techData = [
    {
      src: "https://sainraghuveer.github.io/static/media/html.adce51a1b31e2f045fc6.jpg",
      name: "HTML",
    },
    {
      src: "https://sainraghuveer.github.io/static/media/CSS.bac713639f92eab74cc7.jpg",
      name: "CSS",
    },
    {
      src: "https://sainraghuveer.github.io/static/media/JS.40de590057973b1b3b00.jpg",
      name: "JavaScript",
    },
    {
      src: "https://sainraghuveer.github.io/static/media/nodejs.171aa0646eb609048e73.jpg",
      name: "NodeJS",
    },
    {
      src: "https://sainraghuveer.github.io/static/media/react.e8f87cb925d4b6c05256.jpg",
      name: "React",
    },
    {
      src: "https://sainraghuveer.github.io/static/media/native.13495c753d42f8c45607.jpg",
      name: "Redux",
    },
    {
      src: "https://sainraghuveer.github.io/static/media/mongodb.ee6e1f04b258038b322d.jpg",
      name: "MongoDB",
    },
    {
      src:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      name:"TypeScript"
    }
  ];
  return (
    <div id="skills">
      <Heading color={'green'} borderY={'2px'} marginBottom={'2%'} p={'0.5%'} backgroundColor={'gray.100'}>Tech Stacks</Heading>
      <Heading border={'0px'} marginTop={'3%'}>Skills</Heading>
      <SimpleGrid
        columns={{ base: 2, sm:3, lg: 5 }}
        border="0px solid"
        spacing="2rem"    
        marginTop={'2%'}   
      >
        {techData.map((tech,i) => (
          <Box key={i} className="skills-card" border={"0px"} m={"auto"} p={5} borderRadius={'10%'} boxShadow={'2xl'}>
            <Image
              border={"0px"}
              boxSize={{ base: '90px', sm:'100px', lg: '120px' }}
              src={tech.src}
              alt={tech.name}
              className='skills-card-img'
            />
            <Heading className="skills-card-name" size="sm" marginTop={'5%'}>{tech.name}</Heading>
          </Box>
        ))}

      </SimpleGrid>
    </div>
  );
};
