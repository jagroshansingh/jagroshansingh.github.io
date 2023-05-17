import "./App.css";
import Navbar from "./Components/Navbar";
import {
  Box,
  VStack,
} from "@chakra-ui/react";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { Github } from "./Components/Github";
import styled from "styled-components";
import { Tools } from "./Components/Tools";

function App() {
  const sections = [Home, About, Skills, Tools, Projects, Github, Contact];
  return (
    <div style={{backgroundColor:"whitesmoke"}}>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
      <VStack border={"0px"}>
        {sections.map((section, i) => (
          <Box key={i} w={"100vw"} border={"0px"}>
            <Box
              w={{base:'95%',md:"85%"}}
              m={"auto"}
              border={"0px"}
              textAlign={"center"}
              marginBottom={i!=0?"5%":"0%"}
            
            >
              {" "}
              {section()}{" "}
            </Box>
          </Box>
        ))}
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
