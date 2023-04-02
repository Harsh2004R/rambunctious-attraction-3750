import React from 'react'
import {Box,Image,Text,SimpleGrid} from "@chakra-ui/react"
function Footer() {
  return (
    <>
        <Box w="95%" color="grey"  bg="#ECEFF1" m="auto" marginTop="5%">
            
            <SimpleGrid columns={{base:2, md:4}} >
                <Box p="5%"  textAlign="left" >
                    <Text fontWeight="bold" fontSize="sm">About</Text>
                    <Text color="grey" fontSize="xs">Our story</Text>
                    <Text color="grey" fontSize="xs">Contact us</Text>
                    <Text color="grey" fontSize="xs">Careers</Text>
                    <Text color="grey" fontSize="xs">Privacy policy</Text>
                </Box>
                <Box  p="5%"  textAlign="left">
                    <Text fontWeight="bold" fontSize="sm">Support</Text>
                    <Text color="grey" fontSize="xs">Payments</Text>
                    <Text color="grey" fontSize="xs">Returns/Exchange</Text>
                    <Text color="grey" fontSize="xs">Shipment</Text>
                    <Text color="grey" fontSize="xs">Terms & conditions</Text>
                </Box>
                <Box  p="5%"  textAlign="left"  >
                    <Text fontWeight="bold" fontSize="sm">Customer care</Text>
                    <Text color="grey" fontSize="xs">Timings: 10 AM - 6 PM (Mon - Sat)</Text>
                    <Text color="grey" fontSize="xs">Call: +91 7011263423</Text>
                    <Text color="grey" fontSize="xs">E-Mail: care@koovs.com</Text>
                    <Text color="grey" fontSize="xs">E-Mail: care@koovs.com</Text>
                </Box>
                <Box  p="5%" textAlign="left" >
                    <Text fontWeight="bold" fontSize="sm">Subscribe</Text>
                    <Text color="grey" fontSize="xs">Enter your email below to be the first to know</Text>
                    <Text color="grey" fontSize="xs">about new collections and product launches.</Text>
                </Box> 
                
            </SimpleGrid>
                <Box w="95%"  bg="#ECEFF1"  p="5%" margin="auto"></Box>
                <Box w="95%"  bg="#ECEFF1" margin="auto"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/payment-removebg-preview-01.png?v=1668333198&width=360"/></Box>
        </Box>
    
    
    
    
    
    
    
    </>
  )
}

export default Footer
