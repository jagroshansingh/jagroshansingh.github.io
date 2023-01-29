import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const About = () => {
  return (
    <div id="about" className="about section">
      
      <Stack
        direction="column"
        align="center"
        spacing="4%"
        margin={{ base: 0, md: "0 5rem", lg: "0 9rem" }}
        border={'0px'}
      >
        <Heading as={'u'} color={'green'}  border={'0px'} marginBottom={'2%'}>About</Heading>
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

        <Heading id="user-detail-intro" size={'md'} color={'grey'}>
          A passionate and curious web developer, skilled in MERN stack.
          Proficient in both front-end and back-end with 1225+ hours of coding
          experience. High adaptability and hunger to learn new technologies.
          Aims to leverage knowledge and build user-friendly web applications
          while facilitating organizational goals.
        </Heading>

        <Flex alignItems={"center"} id="resume-button-2">
            <ButtonGroup
              size={'lg'}
              isAttached
              variant="outline"
              colorScheme="green"
            >
              <a
                href="https://drive.google.com/file/d/1oVXIj9zK7Y7aWzadf9mPdF4FxnIxjInT/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant={"solid"} >
                  Resume
                </Button>
              </a>
              <a href="./Jagroshan_Singh_Resume" download>
                <IconButton
                  aria-label="Add to friends"
                  icon={<DownloadIcon />}
                />
              </a>
            </ButtonGroup>
          </Flex>
      </Stack>
    </div>
  );
};
