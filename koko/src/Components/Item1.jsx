import React from 'react'
import { Text,Stack,Card,CardBody,Image,Heading,Box,Button,HStack, SimpleGrid } from '@chakra-ui/react'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'

function Item1() {
  return (
    <>
        <Stack margin="1%" spacing={3}>
            <Text fontSize={{base:"2xl", md:"4xl"}}>Shop Women's</Text>
        </Stack>


  
              
            {/* cards for Girls starting from here============================================================= */}
        
        
    <LinkBox >
        <LinkOverlay href="/Products">
            
        <SimpleGrid  space="even" width="95%" gap="1%" m = "auto" columns={{base:2, md:4}}>
            
            <Box  margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/tops-01_copy.jpg?v=1667987961&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Top's</Heading>
                    <Text fontSixze="xs" color="grey">
                           97 items
                    </Text>
                    <Text color='blue.600' fontSize={{base:"md", md:"2xl"}}>
                         Starting from $15
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/SBRA2-01.jpg?v=1667988040&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Sport's Bra</Heading>
                    <Text fontSixze="xs" color="grey">
                            150+ items
                    </Text>
                    <Text color='blue.600' fontSize={{base:"md", md:"2xl"}}>
                    Starting from $4-5
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Tee-01.jpg?v=1667898427&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>T-Shirts</Heading>
                    <Text fontSixze="xs" color="grey">
                    30 items
                    </Text>
                    <Text color='blue.600' fontSize={{base:"md", md:"2xl"}}>
                    Starting from $3-5
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/shorts_women-01.jpg?v=1667898316&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Shorts</Heading>
                    <Text fontSixze="xs" color="grey">
                            25 items
                    </Text>
                    <Text color='blue.600' fontSize={{base:"md", md:"2xl"}}>
                    Starting from $12
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            
            </SimpleGrid>
            
        </LinkOverlay>
    </LinkBox>



         {/* Cards for Boys Startin from here =======================================================================*/}
        
        

    
        <Stack margin="3%" spacing={3}>
            <Text fontSize={{base:"2xl", md:"4xl" }}>Shop Men's</Text>
        </Stack>

        <LinkBox>
        <LinkOverlay href="/Products">
        <SimpleGrid width="95%" gap="1%" columns={{base:2, md:4}} m = "auto">
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/ball_sweatshirt-01.jpg?v=1668170499&width=360'
                    alt='Green double couch with wooden legs'
                   
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Sweatshirts</Heading>
                    <Text fontSixze="xs" color="grey">
                           73 items
                    </Text>
                    <Text color='blue.600' fontSize={{base:"md", md:"2xl"}}>
                         Starting from $5-8
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/unisex_accessories-01.jpg?v=1668170734&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Accesseries</Heading>
                    <Text fontSixze="xs" color="grey">
                            80+ items
                    </Text>
                    <Text color='blue.600' fontSize={{base:"md", md:"2xl"}}>
                    Starting from $1-4
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Untitled-6-01.jpg?v=1667985899&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>T-Shirts</Heading>
                    <Text fontSixze="xs" color="grey">
                    67 items
                    </Text>
                    <Text color='blue.600' fontSize={{base:"md", md:"2xl"}}>
                    Starting from $3-5
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-1025.jpg?v=1667897521&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Jacket's</Heading>
                    <Text fontSixze="xs" color="grey">
                            21 items
                    </Text>
                    <Text color='blue.600' fontSize={{base:"md", md:"2xl"}}>
                    Starting from $15
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            
        </SimpleGrid>
        </LinkOverlay>
            </LinkBox>
        {/* Varsity Jackets section starting from here =============================================================== */}
        <Stack margin="3%" spacing={3}>
            <Text fontSize={{base:"2xl", md:"4xl"}}>Varsity Jackets</Text>
        </Stack>
        <LinkBox>
        <LinkOverlay href="/Products">
        <SimpleGrid columns={{base:2, md:4}} width="95%" gap="1%" m = "auto">
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/ball_sweatshirt-01.jpg?v=1668170499&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" size='md'>Varsity Jacket-Black</Text>
                    <Text fontSixze="xs" color="grey">
                    THE COUTURE CLUB
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm", md:"2xl"}}>
                    Rs. 1,700.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody >
                    <Box  >
                    <Image 
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/EmptyName_a_2667x_c73a3579-268b-4318-b350-7efb4b3000d1.webp?v=1677043645&width=360'
                    alt='Green double couch with wooden legs' 
                    
                    />
                    </Box>
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" size='md'>Varsity Uki Purple</Text>
                    <Text fontSixze="xs" color="grey">
                    THE COUTURE CLUB
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm", md:"2xl"}}>
                    Rs. 4,202.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/TCCM2202BLUE0368_1600x_b8d04acd-6cc4-4a03-aeb3-a7bf0a2c229e.webp?v=1677043616&width=360'
                    alt='Green double couch with wooden legs'
                   
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" size='md'>Smile Jacket - Yellow</Text>
                    <Text fontSixze="xs" color="grey">
                    THE COUTURE CLUB
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm", md:"2xl"}}>
                    Rs. 2,400.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/closeup_56b51daf-5f11-4275-8d49-b6d6b5a7b52f.png?v=1677044552&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" size='md'>Bless T-shirt(Sushi)</Text>
                    <Text fontSixze="xs" color="grey">
                    THE COUTURE CLUB
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm", md:"2xl"}}>
                    Rs. 2,202.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
        </SimpleGrid>
        </LinkOverlay>
        </LinkBox>


        <LinkBox>
            <LinkOverlay  href="/Products">
        <SimpleGrid columns={{base:2, md:4}} width="95%" gap="1%" m = "auto">
        
            <Box margin="auto">
                
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/closeup_a31b650c-6d73-479a-aa90-d5a833ca8c10.png?v=1677044552&width=360'
                    alt='Green double couch with wooden legs'
                   
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" size='md'>Salty red Sweatshirt</Text>
                    <Text fontSixze="xs" color="grey">
                    THE COUTURE CLUB
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm", md:"2xl"}}>
                    Rs. 1,080.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image 
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/TCCM1699-BLACK1018_800x_4b394419-e80a-4551-bfc4-b4bc53dcce79.jpg?v=1677043773&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" size='md'>Laurel Panelled</Text>
                    <Text fontSixze="xs" color="grey">
                    THE COUTURE CLUB
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm", md:"2xl"}}>Rs. 7,000.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/Selects12396_800x_jpg.webp?v=1677042743&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" size='md'>Varsity Green</Text>
                    <Text fontSixze="xs" color="grey">
                    THE COUTURE CLUB
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm", md:"2xl"}}>
                    Rs. 4,000.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/CataloguetemplateKOOVS-06_c7687641-5cd0-4976-8a8d-190b1b061121.jpg?v=1679399518&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" size='md'>Denim Jacket - Blue Wash</Text>
                    <Text fontSixze="xs"  color="grey">THE COUTURE CLUB</Text>
                    <Text color='blue.600' fontSize={{base:"sm", md:"2xl"}}>
                    Rs. 2,050.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
            
        </SimpleGrid>
        </LinkOverlay>
    </LinkBox>
       
        <Box w="95%"margin="auto">
            <Button margin="3%" color="teal" size={{base:"sm", md:"lg"}}>View All</Button>
        </Box>
        



        {/* Featured Brands section starts from here ======================================================================== */}
        
        
        
        
        
        
        <Stack margin="2%" spacing={3}>
            <Text fontWeight="bold" fontSize={{base:"2xl", md:"4xl"}}>Featured Brands</Text>
        </Stack>


        <Box width="95%" height="auto" display="flex" margin="auto" >
            <Box margin="auto"><Image width="95%" margin="auto"
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-1007.jpg?v=1667990812&width=720'
                    alt='Green double couch with wooden legs'/> <Text color="grey" fontSize="lg" fontWeight="bold" padding="10px" margin="none">Essentials by Ukiyo</Text> </Box>
                   
            <Box margin="auto"><Image width="95%" margin="auto"
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-3213-141.jpg?v=1667995128&width=720'
                    alt='Green double couch with wooden legs'/> <Text color="grey" fontWeight="bold" fontSize="lg" padding="10px" margin="none">Essentials by Ukiyo</Text> </Box>
        </Box>





        {/* George Thomas x Ukiyo Artist Collab ============================================================================================ */}
   




            <Text margin="1%" color="grey">
            George Thomas x Ukiyo
            </Text>
            <Text fontSize={{base:"2xl",md:"3xl"}}>
            Artist Collab
            </Text>
            <LinkBox>
            <LinkOverlay  href="/Products">
            <Box >
            <SimpleGrid columns={{base:2, md:4}} width="95%" gap="1%" m = "auto">
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/flying_1_81a09db1-3be4-43c4-9a50-cd61742b9f6b.png?v=1677043959&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Salty Sweatshirt</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 470.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto" >
            <Card maxW='sm'>
                <CardBody>
                    <Image 
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/latestpsd2.png?v=1677041914&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Laurel Panelled</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>Rs. 500.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/flyingoption2_0ffb810e-c4d4-4e87-9dfe-3810dd32919d.jpg?v=1677043656&width=360'
                    alt='Green double couch with wooden legs'
                   
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Badge T-shirt</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 400.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/flyingback_3d572401-a899-4de8-be0e-304151a6475c.png?v=1677043660&width=360'
                    alt='Green double couch with wooden legs'
                   
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Denim-Blue Wash</Text>
                    <Text fontSixze="xs" color="grey">Ukiyo</Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 750.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
        </SimpleGrid>
        </Box>
        </LinkOverlay>
    </LinkBox>
        
     {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}

     <LinkBox >
       <LinkOverlay href="Products">
            <SimpleGrid columns={{base:2, md:4}} width="95%" gap="1%" m = "auto">
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/back_92b1687d-3727-4557-b093-cd4d5c09138a.png?v=1677043859&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Salty Sweatshirt</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 1,080.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image 
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/backlightying_1psd.png?v=1677042084&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Laurel Panelled</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>Rs. 700.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/backlightying_1psd_9c76c5be-32fc-476d-a7f9-ef39561d870d.png?v=1677042269&width=360'
                    alt='Green double couch with wooden legs'
                   
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Badge Varsity Jacket - Green</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 400.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/back2400x3200.png?v=1677042187&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Bless My Feed T-Shirt</Text>
                    <Text fontSixze="xs" color="grey">Ukiyo</Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 820.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
        </SimpleGrid>
        </LinkOverlay>
        </LinkBox>
        
   
   {/* /////////////////////////////////////////////////////////////////////////////////// */}

   <LinkBox >
            <LinkOverlay href="Products">
   <SimpleGrid columns={{base:2, md:4}} width="95%" gap="1%" m = "auto">
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/closeup_a31b650c-6d73-479a-aa90-d5a833ca8c10.png?v=1677044552&width=360'
                    alt='Green double couch with wooden legs'
                   
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Salty Sprinkle Sweatshirt</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 2280.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image 
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/closeup_56b51daf-5f11-4275-8d49-b6d6b5a7b52f.png?v=1677044552&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Salty Sprinkle Sweatshirt</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>Rs. 2,290.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/back.png?v=1677033793&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Bless my feed Coin Bucket Hat</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 260.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/back_1_d551e687-c2a8-426d-bb72-3b9d461cf0e2.png?v=1677044692&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Gram Worthy Sweatshirt</Text>
                    <Text fontSixze="xs" color="grey">Ukiyo</Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 1,050.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
        </SimpleGrid>
        </LinkOverlay>
   </LinkBox> 
        
   
   {/* /////////////////////////////////////////////////////////////////////////////////////// */}
   <LinkBox >
            <LinkOverlay href="Products"> 
   <SimpleGrid columns={{base:2, md:4}} width="95%" gap="1%" m = "auto">
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/back_c5a2ee79-c0f2-4212-a246-0f9e77bfc21a.png?v=1677044686&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Salty Sprinkle Sweatshirt</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 1,080.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image 
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/back_2.png?v=1677044692&width=360'
                    alt='Green double couch with wooden legs'
                   
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Gram Worthy Sweatshirt</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>Rs. 800.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/backpsd.png?v=1677033826&width=360'
                    alt='Green double couch with wooden legs'
                   
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Badge Varsity Jacket - Green</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 210.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/foldedpsd_a8cb0ba0-203d-42a9-a376-533187a61220.png?v=1677033970&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Bless my feed Pin</Text>
                    <Text fontSixze="xs" color="grey">Ukiyo</Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 150.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
        </SimpleGrid>
        </LinkOverlay>
   </LinkBox> 
        
   {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
   <LinkBox >
            <LinkOverlay href="Products"> 
   <SimpleGrid columns={{base:2, md:4}} width="95%" gap="1%" m = "auto">
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/front_1psd_317e6149-ecce-4f2d-86c0-53f226b1e896.png?v=1677034045&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Gram worthy Pin</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 580.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image 
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/foldedpsd.png?v=1677033938&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Unfortunate Pin</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>Rs. 150.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/back.jpg?v=1677033749&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Say Yes to Nugs Cap</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 500.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/foldedpsd_994a1f4f-149a-4672-b1e7-82752013beae.png?v=1677034003&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Never Lechewgo Pin</Text>
                    <Text fontSixze="xs" color="grey">Ukiyo</Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 750.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
        </SimpleGrid>
        </LinkOverlay>
   </LinkBox> 
        
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <LinkBox >
            <LinkOverlay href="Products"> 
        <SimpleGrid columns={{base:2, md:4}} width="95%" gap="1%" m = "auto">
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/back_e426962b-b062-4109-98e0-199105516332.png?v=1677034073&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Never Lechewgo Baseball cap</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 880.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image 
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/back_338ab78f-b803-4de4-b447-65eadcee66e5.png?v=1677033862&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Never Lechewgo Baseball cap</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>Rs. 990.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/backpsd_9fbda974-6878-43d8-a527-254f389ccf37.png?v=1677033906&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Bless my feed cap</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 1,290.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/closeup_a0250254-fc90-472a-94b3-7b38b4049f63.png?v=1677041300&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Let You Go T-shirt</Text>
                    <Text fontSixze="xs" color="grey">Ukiyo</Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                 Rs. 1,690.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
        </SimpleGrid>
        </LinkOverlay>
   </LinkBox> 
        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <LinkBox >
            <LinkOverlay href="Products"> 
        <SimpleGrid columns={{base:2, md:4}} width="95%" gap="1%" m = "auto">
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/flying_1.png?v=1677043087&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Let You Go T-shirt</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 1,690.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image 
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/back_1.png?v=1677042359&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Gram Worthy Shorts</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>Rs. 1,690.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/closeup_1d7daae3-3d87-4ac6-9c52-969cc71005ff.png?v=1677042427&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Gram Worthy T-shirt</Text>
                    <Text fontSixze="xs" color="grey">
                    Ukiyo
                    </Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 1,690.00
                    </Text>
                    </Stack>
                </CardBody>
  
            </Card>
            </Box>
            <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/products/frontpsd.png?v=1677043146&width=360'
                    alt='Green double couch with wooden legs'
                    
                    />
                    <Stack mt='6' spacing='3'>
                    <Text fontWeight="bold" fontSize={{base:"sm",md:"md"}}>Orange Soda Gang Hoodie</Text>
                    <Text fontSixze="xs" color="grey">Ukiyo</Text>
                    <Text color='blue.600' fontSize={{base:"sm",md:"md"}}>
                    Rs. 2,290.00
                    </Text>
                    </Stack>
                </CardBody>
            </Card>
            </Box>
        </SimpleGrid>
        </LinkOverlay>
   </LinkBox>   
   <LinkBox >
            <LinkOverlay href="Products"> 
        <Button margin="5%"  color="teal" size={{base:"sm", md:"lg"}}>
          Shop Now
        </Button>
        </LinkOverlay>
   </LinkBox>    
        





        {/* ?/////////////////////////////////////////////////////////Sneaker Edit ////////////////////////////////////////////// */}

       



        {/* Sneaker Edit Ends Here \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Sneaker Edit Ends Here \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/}














































   </>       
    
    
  )
}

export default Item1
