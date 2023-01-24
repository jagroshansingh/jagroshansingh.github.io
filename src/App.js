import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import {
  Heading,
  Center,
  Box,
  VStack,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { Github } from "./Components/Github";
import styled from "styled-components";
import ProjectCard from "./Components/ProjectCard";
import { Tools } from "./Components/Tools";

function App() {
  const sections = [Home, About, Skills, Tools, Projects, Github, Contact];
  return (
    <div>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
      <VStack border={"0px"}>
        {/* <Heading><Center>Let's WORK the PROBLEM</Center></Heading> */}

        {sections.map((section,i) => (
          <Box key={i} w={"100vw"} border={"0px"} >
            <Box w={"85%"} m={"auto"} border={"0px"} textAlign={'center'} marginBottom={'5%'}>
              {" "}
              {section()}{" "}
            </Box>
          </Box>
        ))}

        {/* <Home />
        <About />
        <Skills />
        <Projects />
        <Github />
        <Contact /> */}
      </VStack>
    </div>
  );
}

export default App;

const NavWrapper = styled.div`
  border: 0px solid;
  position: sticky;
  top: 0px;
  z-index: 1;
`;
