import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Heading,Center, Box } from '@chakra-ui/react';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Github } from './Components/Github';
import styled from 'styled-components';

function App() {
  return (
    <div className='App'>
      <NavWrapper>
      <Navbar/>
      </NavWrapper>
      <Box margin='0% 3%'>
        {/* <Heading><Center>Let's WORK the PROBLEM</Center></Heading> */}
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <br/>
        <Github/>
        <Contact/>
      </Box>
    </div>
  );
}

export default App;

const NavWrapper=styled.div`
border:0px solid;
position:sticky;
top:0px;
z-index:1
`
