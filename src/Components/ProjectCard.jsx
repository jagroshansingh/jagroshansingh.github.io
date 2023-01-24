import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function ProjectCard({ image, title, subtitle, desc, techstack, github, deployed }) {
  //console.log(techstack)
  return (
    <Center py={6} className="project-card">
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height='auto'
        // direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="100%"
            boxSize="100%"
            border={'1px'}
            src={image}
          />
        </Flex>

       
        <Stack         
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'} className="project-title">
            {title}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {subtitle}
          </Text>
          <Text
            className="project-description"
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {desc}
          </Text>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            {techstack?.map((tech,ind)=>{
              return<Badge
              key={ind}
              px={2}
              py={1}
              fontWeight={'400'}>
              {tech}
            </Badge>
            })}          
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>

            <a href={github} target="_blank" rel="noreferrer">
              <Button
              className="project-github-link"
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
                Github
              </Button>
            </a>

            <a href={deployed} target="_blank" rel="noreferrer">
              <Button
              className="project-deployed-link"
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'green'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'green.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                Deployed
              </Button>
            </a>

          </Stack>
        </Stack>
       
      </Stack>
    </Center>
  );
}