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
  ];
  return (
    <div id="skills">
      <Heading as={'u'} color={'green'}>Tech Stacks</Heading>
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
  );
};
