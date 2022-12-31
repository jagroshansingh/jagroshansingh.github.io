import { Center, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const Contact = () => {
  return (
    <div id='contact'>
      <VStack>
      
      <HStack border='1px solid'>
        <Text>Let's</Text>
        <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=Figure+out;get+after+it+Relentlessly;make+the+most+of+Today;Work+the+Problem" alt="Typing SVG" />
      </HStack>
      <Heading>Connect with me:</Heading>
      
      </VStack>
    </div>
  )
}
