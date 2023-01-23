import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const About = () => {
  return (
    <div id="about" className="about section">
      <Center><Heading>About</Heading></Center>
      <Stack
        direction="column"
        align="center"
        spacing="4%"
        margin={{ base: 0, md: "0 5rem", lg: "0 9rem" }}
        border="0px solid"
      >
        <Box>
          <Image
            className="home-img"
            margin="auto"
            border="1px solid "
            borderRadius="full"
            boxSize="250px"
            src="https://avatars.githubusercontent.com/u/112631904?v=4"
            alt="Profile Image"
          />
          <Heading id="user-detail-name">Jagroshan Singh</Heading>
        </Box>

        <Text id="user-detail-intro">
          A passionate and curious web developer, skilled in MERN stack.
          Proficient in both front-end and back-end with 1225+ hours of coding
          experience. High adaptability and hunger to learn new technologies.
          Aims to leverage knowledge and build user-friendly web applications
          while facilitating organizational goals.
        </Text>
      </Stack>
    </div>
  );
};
