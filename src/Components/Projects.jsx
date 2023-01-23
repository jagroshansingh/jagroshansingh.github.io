import { Box, Button, Heading, Image, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectCard from './ProjectCard'



export const Projects = () => {
  const projectsData=[
    { 
      image:'/InfinityMail_LandingPage.png',
      title:'Infinity Mail',
      subtitle:'Clone-Mailtrap.io',
      desc:'Dummy SMTP service provider for e-mail testing',
      techstack:['HTML', 'CSS', 'JavaScript'],
      github:'https://github.com/randomFrisby/spotty-butter-9254',
      deployed:'https://marvelous-starlight-49c422.netlify.app/'
    },
    { 
      image:'/Orbitz_LandingPage.png',
      title:'BA..e(Be As You Are)',
      subtitle:'Clone-Orbitz.com',
      desc:'Travel booking service, explicitly for the LGBTQ+ community.',
      techstack:['React', 'Chakra-UI', 'HTML/CSS', 'JavaScript'],
      github:'https://github.com/jagroshansingh/cute-hand-680',
      deployed:'https://effortless-fenglisu-0041ef.netlify.app/'
    }
  ]

  return (
    <div id='projects'  >

      <Heading>Projects</Heading>
      <SimpleGrid columns={{base: 1, md: 2}} spacing={10}>
    {projectsData.map((project,index)=><ProjectCard key={index} {...project}/>)}
      </SimpleGrid>
      
    </div>
  )
}
