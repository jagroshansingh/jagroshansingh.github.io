import {
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import Aos from "aos";
import "aos/dist/aos.css"

export const Projects = () => {

  React.useEffect(()=>{
    Aos.init({delay:100})
  },[])

  const projectsData = [
    {
      image: "/FashionGallary_LandingPage.png",
      title: "Fashion Gallary",
      // subtitle: "Clone-Mailtrap.io",
      desc: "FashionGallary is the ultimate destination for men's fashion, hosts a wide array of latest trending clothing solutions in men's category.",
      techstack: ["REACT", "NodeJS", "Mongo"],
      github: "https://github.com/Durgesh9871/Fashion-Gallery",
      deployed: "https://fashion-gallery.vercel.app/",
    },
    {
      image: "/BeAsYouAre_LandingPage.png",
      title: "BA..e(Be As You Are)",
      // subtitle: "Clone-Orbitz.com",
      desc: "A travel booking service, especially serving to the LGBTQ+ community. No matter who you are or where you’re going, you deserve to travel freely.",
      techstack: ["React", "Chakra-UI", "Express"],
      github: "https://github.com/jagroshansingh/BA..e-BeAsYouAre",
      deployed: "https://bae-travel.vercel.app/",
    },
    {
      image: "/Glamox_LandingPage.png",
      title: "Glamox",
      subtitle: "Clone-Nykaa.com",
      desc: "Glamox is an e-commerce platform providing beauty, personal care, cosmetic commodities and fashion solutions for both men and women.",
      techstack: ["React", "TypeScript", "Redux"],
      github: "https://github.com/rajeshdeo/glamox",
      deployed: "https://glamox-nykaa-clone.vercel.app/",
    },
    {
      image: "/QuizApp_Dashboard.png",
      title: "Brain Brust",
      subtitle: "Quiz App",
      desc: "A Quiz app, where users can put their knowledge to the test and create personalized quizzes. With an integrated leaderboard, users can compete with friends and track their progress.",
      techstack: ["REACT", "EXPRESS", "MONGO"],
      github: "https://github.com/jagroshansingh/Quiz",
      deployed: "https://brain-burst-quiz.vercel.app/",
    }
    // {
    //   image: "/InfinityMail_LandingPage.png",
    //   title: "Infinity Mail",
    //   subtitle: "Clone-Mailtrap.io",
    //   desc: "InfinityMail is an add-on for safe and comprehensive email testing. It is implemented as a dummy SMTP server. It catches all the test emails and displays them in virtual inboxes.",
    //   techstack: ["HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/randomFrisby/Infinite-Mail",
    //   deployed: "https://infinite-mail.netlify.app/",
    // },
    // {
    //   image: "/Myntra_LandingPage.png",
    //   title: "Myntra",
    //   subtitle: "Clone-Myntra.com",
    //   desc: "Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery and more.",
    //   techstack: ["HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/jagroshansingh/Myntra-Clone",
    //   deployed: "https://magnificent-sunburst-122c38.netlify.app/",
    // },
  ];

  return (
    <div id="projects" style={{border:'0px solid whitesmoke'}}>
      <Heading marginTop={'63px'} color={'green'} borderY={'2px'} marginBottom={'2%'} p={'0.5%'} backgroundColor={'gray.100'} data-aos={"fade-right"}>
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} marginTop={'3%'} border={'0px'}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} index={index}/>
        ))}
      </SimpleGrid>
    </div>
  );
};
