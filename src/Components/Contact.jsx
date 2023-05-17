import {
  Button,
  Heading,
  HStack,
  IconButton,
  Link,
  Stack,
  Tooltip,
  useClipboard,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Contact = () => {
  const { hasCopied, onCopy } = useClipboard("jagroshansingh615@gmail.com");
  return (
    <div id="contact" style={{border:'0px solid'}}>
      <hr/>
      <VStack>
        <Heading
          size={{ base: "sm", sm:'md', md: "xl" }}
          style={{ padding: "1rem", margin: "auto 0", fontWeight: "normal" }}
        >
          Let's{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1000}
              words={[
                "Figure out",
                "get after it Relentlessly",
                "Work the Problem",
              ]}
              onLoop={(loopCount) =>
                console.log(`Just completed loop ${loopCount}`)
              }
            />
          </span>
        </Heading>

        <Heading size={{ base: "md", md: "xl" }}>Connect with me:</Heading>
        <HStack
          mt={{ lg: 10, md: 10 }}
          spacing={5}
          px={5}
          alignItems="flex-start"
        >

          <Link
            id="contact-github"
            href="https://github.com/jagroshansingh"
            target={"_blank"}
          >
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: "#0D74FF" }}
              icon={<BsGithub size="28px" />}
            />
          </Link>

          <Link
            id="contact-linkedin"
            href="https://www.linkedin.com/in/jagroshan-singh/"
            target={"_blank"}
          >
            <IconButton
              aria-label="linkedin"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: "#0D74FF" }}
              icon={<BsLinkedin size="28px" />}
            />
          </Link>
        </HStack>

        <Stack
          direction={{ base: "column", md: "row" }}
          border={"0px"}
          margin={"auto"}
        >
          <Button
            id="contact-phone"
            size="md"
            height="48px"
            // width="200px"
            variant="ghost"
            color="blue.300"
            _hover={{ border: "2px solid #1C6FEB" }}
            leftIcon={<MdPhone color="#1970F1" size="20px" />}
          >
            +91-9784541446
          </Button>

          <Button
            size="md"
            height="48px"
            // width="150px"
            variant="ghost"
            color="blue.300"
            _hover={{ border: "2px solid #1C6FEB" }}
            leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
          >
            Gaya, Bihar
          </Button>

          <Tooltip
            label={hasCopied ? "Email Copied!" : "Copy Email"}
            closeOnClick={false}
            hasArrow
          >
            <Button
              id="contact-email"
              size="md"
              height="48px"
              // width="300px"
              variant="ghost"
              color="blue.300"
              _hover={{ border: "2px solid #1C6FEB" }}
              onClick={onCopy}
              leftIcon={<MdEmail color="#1970F1" size="20px" />}
            >
              jagroshansingh615@gmail.com
            </Button>
          </Tooltip>
        </Stack>
      </VStack>
    </div>
  );
};
