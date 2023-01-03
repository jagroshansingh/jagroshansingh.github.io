import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Heading,Center } from '@chakra-ui/react';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';

function App() {
  return (
    <div style={{textAlign:'center'}}>
      <Navbar/>
      <Heading><Center>Let's WORK the PROBLEM</Center></Heading>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
