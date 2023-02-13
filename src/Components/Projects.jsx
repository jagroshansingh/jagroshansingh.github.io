import {
  Box,
  Button,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
  const projectsData = [
    {
      image: "/InfinityMail_LandingPage.png",
      title: "Infinity Mail",
      subtitle: "Clone-Mailtrap.io",
      desc: "InfinityMail is an add-on for safe and comprehensive email testing. It is implemented as a dummy SMTP server. It catches all the test emails and displays them in virtual inboxes.",
      techstack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/randomFrisby/spotty-butter-9254",
      deployed: "https://marvelous-starlight-49c422.netlify.app/",
    },
    {
      image: "/BeAsYouAre_LandingPage.png",
      title: "BA..e(Be As You Are)",
      subtitle: "Clone-Orbitz.com",
      desc: "BA..e is a travel booking service, especially serving to the LGBTQ+ community. No matter who you are or where you’re going, you deserve to travel freely.",
      techstack: ["React", "Chakra-UI", "HTML/CSS", "JavaScript"],
      github: "https://github.com/jagroshansingh/cute-hand-680",
      deployed: "https://effortless-fenglisu-0041ef.netlify.app/",
    },
    {
      image: "/Glamox_LandingPage.png",
      title: "Glamox",
      subtitle: "Clone-Nykaa.com",
      desc: "Glamox is an e-commerce platform providing beauty, personal care, cosmetic commodities and fashion solutions for both men and women.",
      techstack: ["React", "TypeScript", "Chakra-UI", "Redux"],
      github: "https://github.com/rajeshdeo/axiomatic-yard-6345",
      deployed: "https://helpful-crumble-d311e0.netlify.app/",
    },
    {
      image: "/Myntra_LandingPage.png",
      title: "Myntra",
      subtitle: "Clone-Myntra.com",
      desc: "Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery and more.",
      techstack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jagroshansingh/Myntra-Clone",
      deployed: "https://magnificent-sunburst-122c38.netlify.app/",
    },
  ];

  return (
    <div id="projects">
      <Heading color={'green'} borderY={'2px'} marginBottom={'2%'} p={'0.5%'} backgroundColor={'gray.100'}>
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} marginTop={'3%'}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </SimpleGrid>
    </div>
  );
};
