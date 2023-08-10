import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  return (
    <div id='home' style={{border:'0px solid'}}>
      <Heading
        style={{margin:'3rem 0', fontWeight: 'normal', marginTop:'63px'}}
        size={{base:'lg',md:'xl'}}
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
            words={['the Problem', 'also the Solution']}
            onLoop={(loopCount) =>
              console.log(`Just completed loop ${loopCount}`)
            }
          />
        </span>
      </Heading>
    </div>
  )
}
