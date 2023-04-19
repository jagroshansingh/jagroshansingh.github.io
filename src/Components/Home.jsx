import { Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  return (
    <div id='home' style={{border:'1px solid whitesmoke'}}>
      <Heading
        style={{margin:'3rem 0', fontWeight: 'normal', marginTop:'63px'}}
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
    </div>
  )
}
