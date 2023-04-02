
import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    LinkBox,
    LinkOverlay
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import NavBar from "../Components/NavBar"
  import Footer from "../Components/Footer"
  export default function Membership() {
    return (
      <>
      
      
    <NavBar/>
    <Box w="95%" m="auto">
      <Center bgColor="#ECEFF1" py={20}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              px={3}
              color={'green.500'}
              rounded={'full'}>
              Ukiyo Special
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}>Rs.</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                199
              </Text>
              <Text color={'gray.500'}>/month</Text>
            </Stack>
          </Stack>
  
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Some fantastic offers just for you.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Free delivery Charges.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Special Member Tag
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Unlock Your All features
              </ListItem>
            </List>
  <LinkBox>
  <LinkOverlay href="/Payment">
            <Button
              mt={10}
              w={'full'}
              bg={'green.400'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}>
              Start your trial
            </Button>
            </LinkOverlay>
            </LinkBox>
          </Box>
        </Box>
      </Center>
      </Box>
      <Footer/>
      </>
    );
  }