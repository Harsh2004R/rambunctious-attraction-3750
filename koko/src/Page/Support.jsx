import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon,PhoneIcon,EmailIcon } from '@chakra-ui/icons';
  import NavBar from "../Components/NavBar"
  import Footer from "../Components/Footer"
  // Replace test data with your own
  const features = Array.apply(null, Array(8)).map(function (x, i) {
    return {
      id: i,
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    };
  });
  
  export default function GridListWithHeading() {
    return (
   <>
   <NavBar/>
    <Box w="95%" m="auto" bgColor="#455A64"  p={4}>
      <Stack  spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading color="black" fontSize={'3xl'}>Support Mail Us</Heading><Box><EmailIcon color="#ffff" /></Box>
        <Heading fontSize={{base:"md",md:"2xl"}} color='#FDD835'>harshsharmaktm03@gmail.com</Heading>
        <Text color={'#ffff'}  fontSize={{base:"md",md:"4xl"}}>Contact Us :
         7454982623 <Box><PhoneIcon color="#ffff" /></Box>
        </Text>
        
        
         <Text color={'#ffff'}  fontSize={{base:"md",md:"4xl"}}>
         7454982623 
        </Text>
        
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'#FDD835'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text color="black" fontWeight={600}>{feature.title}</Text>
                <Text color={'#ffff'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
      <Box p="5%" >

    </Box>
    </Box>
    <Footer/>
      </>
    );
  }