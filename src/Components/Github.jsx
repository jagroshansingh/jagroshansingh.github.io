import { Box, Center, Heading, HStack, Image, VStack, Wrap } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'

export const Github = () => {
  return (
    <div id='github' >
      <VStack spacing={5}>
        <Center><Heading>GitHub</Heading></Center>
        <Center>
          <GitHubCalendar username='jagroshansingh'>
            <ReactTooltip html delayShow={20} />
          </GitHubCalendar>
        </Center>
        <HStack>
          <Wrap justify='center'>
          <Image src='https://github-readme-stats.vercel.app/api?username=jagroshansingh&show_icons=true&theme=radical' />
          <Image src="https://github-readme-streak-stats.herokuapp.com?user=jagroshansingh&theme=dark" />
          </Wrap>
        </HStack>
        <Center>
          <Image src='https://github-readme-stats.vercel.app/api/top-langs/?username=jagroshansingh' />
        </Center>
      </VStack>
    </div>
  )
}
