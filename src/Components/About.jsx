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
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export const About = () => {
  const navigate=useNavigate()
  return (
    <div id="about" className="about section" style={{border:'1px solid whitesmoke'}}>
      
      <Stack
        direction="column"
        align="center"
        spacing="4%"
        margin={{ base: 0, md: "0 5rem", lg: "0 9rem" }}
        border={'0px'}
      >
        <Heading marginTop={'63px'} color={'green'} borderY={'2px'} marginBottom={'2%'} p={'0.5%'} backgroundColor={'gray.100'}>About</Heading>
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

        <Flex alignItems={"center"} >
            <ButtonGroup
              size={{base:'sm',md:'md'}}
              isAttached
              variant="outline"
              colorScheme="green"
            >
              <a
                // href="https://drive.google.com/file/d/1oVXIj9zK7Y7aWzadf9mPdF4FxnIxjInT/view?usp=share_link"
                href="./Jagroshan_Singh_Resume.pdf"
                onClick={() => window.open("https://drive.google.com/file/d/1oVXIj9zK7Y7aWzadf9mPdF4FxnIxjInT/view?usp=share_link")}
                target="_blank"
                rel="noreferrer"
                download={'fw21_0966-Jagroshan-Singh-Resume'}
              >
                <Button variant={"solid"} >
                  Resume
                </Button>
              </a>
              {/* <a href="./Jagroshan_Singh_Resume.pdf" download={'Jagroshan_Singh_Resume'} className="nav-link resume" id="resume-button-1">
                <IconButton
                  aria-label="Add to friends"
                  icon={<DownloadIcon />}
                />
              </a> */}
            </ButtonGroup>
          </Flex>
      </Stack>
    </div>
  );
};
