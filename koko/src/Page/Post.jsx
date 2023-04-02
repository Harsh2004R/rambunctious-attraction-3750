import {Box,Text,Image,SimpleGrid,Card,CardBody,Stack,Heading,Button, LinkOverlay,LinkBox } from "@chakra-ui/react"


export default function Post({ img, title, price,ratings }) {

  return (
      <>
      <LinkBox>
      <LinkOverlay href="/Info">
      <Box w="95%"  >
      <SimpleGrid   m="auto"   columns={{base:1, md:2}}>
      <Box  m="auto"  >
        <Box margin="auto">
            <Card m="auto" maxW='sm'>
                <CardBody m="auto" w={{base:"50%",md:"100%"}}>
                    <Image 
                    src={img}
                    alt=''
                    />
                </CardBody>
            </Card>
            </Box>
        </Box>
        <Box m="auto" >
        <Box margin="auto">
            <Card maxW='sm'>
                <CardBody>
                    
                <Stack mt='6' spacing='3'>
                    <Heading size={{base:"lg",md:"2xl"}} color="teal.400">{title}</Heading>
                    <Text fontSixze="xs" color="grey">
                    Rating  : {ratings} ⭐
                    </Text>
                    <Text color='#29B6F6' fontSize={{base:"md", md:"2xl"}}>
                    Price {price} 💰
                    </Text>
                    </Stack>
                    <Button bgColor="#FFEB3B" color="#29B6F6">
                        Buy Now
                    </Button>
                </CardBody>
            </Card>
            </Box>
        </Box>
        </SimpleGrid>
      </Box>
      </LinkOverlay>
      </LinkBox>
      </>
    );
}
  