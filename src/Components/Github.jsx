import { Center, Heading, HStack, Image, VStack, Wrap } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import Aos from "aos";
import "aos/dist/aos.css"

export const Github = () => {
  React.useEffect(()=>{
    Aos.init({delay:100})
  },[])

  return (
    <div id="github" style={{ border: "0px solid whitesmoke" }}>
      <Heading
        marginTop={"63px"}
        color={"green"}
        borderY={"2px"}
        marginBottom={"4%"}
        p={"0.5%"}
        backgroundColor={"gray.100"}
        data-aos={"fade-right"}
      >
        GitHub
      </Heading>
      <VStack spacing={9}>
        <Center className="react-activity-calendar">
          <GitHubCalendar username="jagroshansingh">
            <ReactTooltip html delayShow={20} />
          </GitHubCalendar>
        </Center>
        <HStack>
          <Wrap justify="center">
            <Image
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=jagroshansingh&show_icons=true&theme=radical"
            />
            <Image
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=jagroshansingh&theme=dark"
            />
          </Wrap>
        </HStack>
        <Center>
          <Image
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=jagroshansingh"
          />
        </Center>
      </VStack>
    </div>
  );
};
