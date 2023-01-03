import { Heading, Image } from '@chakra-ui/react'
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

      <Image
        borderRadius='full'
        boxSize='150px'
        src='https://d2g5r6q74hb2rv.cloudfront.net/eyJidWNrZXQiOiJmbG93Y3YtaW1hZ2VzLXByb2QiLCJrZXkiOiJhdmF0YXIvWjdBRnVHY0FfWHU1VF9LS0VQX2xNLmpwZWciLCJlZGl0cyI6eyJncmF5c2NhbGUiOmZhbHNlLCJ3ZWJwIjp0cnVlLCJqcGVnIjp0cnVlLCJwbmciOmZhbHNlLCJleHRyYWN0Ijp7IndpZHRoIjo2OTIsImhlaWdodCI6NjkyLCJ0b3AiOjU3LCJsZWZ0Ijo3Nn0sInJlc2l6ZSI6eyJ3aWR0aCI6NjAwfX19'
        alt='Dan Abramov'
      />
    </div>
  )
}

