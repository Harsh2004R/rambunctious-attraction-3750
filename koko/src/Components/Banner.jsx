import React from 'react'
import { Image, Box, Button,} from '@chakra-ui/react'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'

function Banner() {
  return (
    <>
    <LinkBox>
    <LinkOverlay href="/Products">
      <Box w="95%"   margin="auto">
        <Image width="100%" height="95%" src='https://logan.nnnow.com/content/dam/nnnow-project/27-mar-2023/hp/28MAR23-SummerBlues-FashionStory-DSK-re2.jpg' alt="Ukiyo Banner" />
        <Button margin="2%"  textAlign="center" color="teal" size={{base:"sm", md:"lg"}}>
          Shop Now
        </Button>
      </Box>
      </LinkOverlay>
    </LinkBox>
    </>
    
  )
}
// https://logan.nnnow.com/content/dam/nnnow-project/27-mar-2023/hp/28MAR23-SummerBlues-FashionStory-DSK-re2.jpg
export default Banner
