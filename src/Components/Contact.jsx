import { Button, Center, Heading, HStack, IconButton, Link, Stack, Text, Tooltip, useClipboard, VStack } from '@chakra-ui/react'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';

export const Contact = () => {
  const { hasCopied, onCopy } = useClipboard('jagroshansingh615@gmail.com');
  return (
    <div id='contact'>
      <VStack>
        <Heading
          style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}
        >
          Let's{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              loop
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1000}
              words={['Figure out', 'get after it Relentlessly', 'make the most of Today', 'Work the Problem']}
              onLoop={(loopCount) =>
                console.log(`Just completed loop ${loopCount}`)
              }
            />
          </span>
        </Heading>
        {/* <HStack border='1px solid'>
        <Text>Let's</Text>
        <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=Figure+out;get+after+it+Relentlessly;make+the+most+of+Today;Work+the+Problem" alt="Typing SVG" />
      </HStack> */}
        <Heading>Connect with me:</Heading>
        <HStack
          mt={{ lg: 10, md: 10 }}
          spacing={5}
          px={5}
          alignItems="flex-start">

          <Tooltip
            label={hasCopied ? 'Email Copied!' : 'Copy Email'}
            closeOnClick={false}
            hasArrow>
            <IconButton
              aria-label="email"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: '#0D74FF' }}
              icon={<MdEmail size="28px" />}
              onClick={onCopy}
            />
          </Tooltip>

          <Link href='https://github.com/jagroshansingh'>
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: '#0D74FF' }}
              icon={<BsGithub size="28px" />}
            />
          </Link>

          <Link href='https://www.linkedin.com/in/jagroshan-singh/'>
            <IconButton
              aria-label="linkedin"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: '#0D74FF' }}
              icon={<BsLinkedin size="28px" />}
            />
          </Link>
        </HStack>

        <HStack>
          <Button
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            color="#DCE2FF"
            _hover={{ border: '2px solid #1C6FEB' }}
            leftIcon={<MdPhone color="#1970F1" size="20px" />}>
            +91-9784541446
          </Button>
          {/* <Button
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            color="#DCE2FF"
            _hover={{ border: '2px solid #1C6FEB' }}
            leftIcon={<MdEmail color="#1970F1" size="20px" />}>
            jagroshansingh615@gmail.com
          </Button> */}
          <Button
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            color="#DCE2FF"
            _hover={{ border: '2px solid #1C6FEB' }}
            leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
            Gaya, Bihar
          </Button>

        </HStack>
      </VStack>
    </div>
  )
}
