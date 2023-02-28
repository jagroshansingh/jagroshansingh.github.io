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
      src: "./pics/html_icon.png",
      name: "HTML",
    },
    {
      src: "./pics/css_icon.png",
      name: "CSS",
    },
    {
      src: "./pics/js_icon.png",
      name: "JavaScript",
    },
    {
      src: "./pics/nodejs_icon.png",
      name: "NodeJS",
    },
    {
      src: "./pics/react js_logo.png",
      name: "React",
    },
    {
      src: "./pics/redux_icon.png",
      name: "Redux",
    },
    {
      src: "./pics/mongodb_icon.png",
      name: "MongoDB",
    },
    {
      src:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      name:"TypeScript"
    }
  ];
  return (
    <div id="skills" style={{border:'1px solid whitesmoke'}}>
      <Heading marginTop={'63px'} color={'green'} borderY={'2px'} marginBottom={'2%'} p={'0.5%'} backgroundColor={'gray.100'}>Tech Stacks</Heading>
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
