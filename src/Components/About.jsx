import { Box, Center, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


export const About = () => {

  return (
    <div id='about' className='about section'>
      <Heading
        style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}
      >
        I am{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            loop
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={70}
            delaySpeed={1000}
            words={['the Problem', 'also the Solution', 'Jagroshan']}
            onLoop={(loopCount) =>
              console.log(`Just completed loop ${loopCount}`)
            }
          />
        </span>
      </Heading>

<Stack direction={{base:'column',md:'row'}} align='center' spacing='4%'>
    <Box>      
      <Image
        margin='auto'
        border='1px solid '
        borderRadius='full'
        boxSize='150px'
        src='https://avatars.githubusercontent.com/u/112631904?v=4'
        alt='Profile Image'
      />
      <Heading>Jagroshan Singh</Heading>
    </Box> 

      <Text>A passionate and curious web developer, skilled in MERN
            stack. Proficient in both front-end and back-end with 1225+
            hours of coding experience. High adaptability and hunger
            to learn new technologies. Aims to leverage knowledge and
            build user-friendly web applications while facilitating
            organizational goals.
      </Text>
</Stack>
    </div>
  )
}

