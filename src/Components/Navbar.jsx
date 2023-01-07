
import { ReactNode } from 'react';
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, DownloadIcon } from '@chakra-ui/icons';

// const Links = ['Home', 'About', 'Skills', 'Project', 'Contact'];
const NavItem=[
  {name:'Home',class:'nav-link home'},
  {name:'About',class:'nav-link about'},
  {name:'Skills',class:'nav-link skills'},
  {name:'Project',class:'nav-link projects'},
  {name:'Contact',class:'nav-link contact'},
]

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} id='nav-menu'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            {NavItem.map((item,index)=>(<div key={index} className={item.class}><NavLink key={item.name} >{item.name}</NavLink></div>))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'} className="nav-link resume">
            <ButtonGroup size='md' isAttached variant='outline' colorScheme='teal'>
              <a href='https://drive.google.com/file/d/1oVXIj9zK7Y7aWzadf9mPdF4FxnIxjInT/view?usp=share_link'>
              <Button variant={'solid'} colorScheme={'teal'} >
                Resume
              </Button>
              </a>
              <a href='./Jagroshan_Singh_Resume' download>
              <IconButton aria-label='Add to friends' icon={<DownloadIcon />} />
              </a>
            </ButtonGroup>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              {NavItem.map((item,index)=>(<div key={index} className={item.class}><NavLink key={item.name}>{item.name}</NavLink></div>))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}