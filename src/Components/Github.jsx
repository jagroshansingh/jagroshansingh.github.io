import { Box, Center, Heading } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'

export const Github = () => {
  return (
    <div >
      <Center><Heading>GitHub</Heading></Center>
      <Center>
    <GitHubCalendar username='jagroshansingh'>
      <ReactTooltip html delayShow={20}/>
    </GitHubCalendar>
      </Center>
    </div>
  )
}
