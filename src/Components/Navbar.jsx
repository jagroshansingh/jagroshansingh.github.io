import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  DownloadIcon,
} from "@chakra-ui/icons";

// const Links = ['Home', 'About', 'Skills', 'Project', 'Contact'];
const NavItem = [
  { name: "Home", class: "nav-link home", id: "home" },
  { name: "About", class: "nav-link about", id: "about" },
  { name: "Skills", class: "nav-link skills", id: "skills" },
  { name: "Project", class: "nav-link projects", id: "projects" },
  { name: "GitHub", class: "nav-link github", id: "github" },
  { name: "Contact", class: "nav-link contact", id: "contact" },
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={`#${children[1]}`}
  >
    {children[0]}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} id="nav-menu">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            paddingLeft={{ base: 20, md: 0 }}
          >
            <Box border={"0px"}>
              <Image
                w={"5em"}
                border={"0px"}
                borderRadius={'50% 1% 50% 1%'}
                src="https://pbs.twimg.com/media/FnK0CX7agAEjK1B?format=png&name=small"
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {NavItem.map((item, index) => (
                <div key={index} className={item.class}>
                  <NavLink key={item.name}>{[item.name, item.id]}</NavLink>
                </div>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} className="nav-link resume">
            <ButtonGroup
              size="md"
              isAttached
              variant="outline"
              colorScheme="teal"
            >
              <a
                href="https://drive.google.com/file/d/1oVXIj9zK7Y7aWzadf9mPdF4FxnIxjInT/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant={"solid"} colorScheme={"teal"}>
                  Resume
                </Button>
              </a>
              <a href="./Jagroshan_Singh_Resume" download>
                <IconButton
                  aria-label="Add to friends"
                  icon={<DownloadIcon />}
                />
              </a>
            </ButtonGroup>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {NavItem.map((item, index) => (
                <div key={index} className={item.class}>
                  <NavLink key={item.name}>{[item.name, item.id]}</NavLink>
                </div>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
