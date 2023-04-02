import React from 'react'
import { Stack,Box,Image,Text,Button,GridItem,Grid,LinkBox, LinkOverlay } from "@chakra-ui/react"
import { useState } from 'react';
import {MinusIcon} from "@chakra-ui/icons"


const ShoesData = [
    {id:1,
        img1:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/example-600x800-for-product-catalogue-03_359501ed-6390-4f7f-a97a-af93b7079af4.jpg?v=1677057175&width=360",
        img2:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/example-600x800-for-product-catalogue-02_1083e898-7071-49a7-8c64-2fe8a641ab29.jpg?v=1677057853&width=360",
        img3:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/comatoestemplpate-02_a5bbe23c-2a08-4684-9712-bf3cd78a019a.jpg?v=1677146707&width=360",
        img4:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/comatoestemplpate_a8f465f1-01b9-4157-a61f-07c43d8736bd.jpg?v=1677224630&width=360",
    },
    {id:2,
        img1:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/comatoestemplpate-02_a5bbe23c-2a08-4684-9712-bf3cd78a019a.jpg?v=1677146707&width=360",
        img2:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/comatoestemplpate_a8f465f1-01b9-4157-a61f-07c43d8736bd.jpg?v=1677224630&width=360",
        img3:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/example-600x800-for-product-catalogue-01_020cba70-e06e-4f13-a5fc-cc37788b4fad.jpg?v=1677056918&width=360",
        img4:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/nikeresize-03_86fe65e1-e2a6-4660-b808-f31a9d971989.jpg?v=1677070299&width=360",

    },
    {id:3,
        img1:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/example-600x800-for-product-catalogue-01_020cba70-e06e-4f13-a5fc-cc37788b4fad.jpg?v=1677056918&width=360",
        img2:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/nikeresize-03_86fe65e1-e2a6-4660-b808-f31a9d971989.jpg?v=1677070299&width=360",
        img3:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/example-600x800-for-product-catalogue-09_4ebf2762-2362-4f27-8c63-683fbb14c2c8.jpg?v=1677057076&width=360",
        img4:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/comatoestemplpate_a8f465f1-01b9-4157-a61f-07c43d8736bd.jpg?v=1677224630&width=360",

    }
];


function Sneaker() {

    const[shoes,setShoes]=useState(0);
    const bcde = (val)=>{
        if (val==="1"){
            setShoes(0)
        }else if(val==="2"){
            setShoes(1)
        }else if(val==="3"){
            setShoes(2)
        }
    }

  return (
    

    <>
     <Stack  spacing={3}>
            <Text textAlign="center" fontWeight="bold" fontSize='4xl'>Sneaker Edit</Text>
        </Stack>
       
        <Box  width="95%" margin="auto">
            <Box margin="auto" display="flex">
                <Box  margin="auto"><Image src={ShoesData[shoes].img1}/></Box>
                <Box  margin="auto"><Image src={ShoesData[shoes].img2}/></Box>
                <Box  margin="auto"><Image src={ShoesData[shoes].img3}/></Box>
                <Box  margin="auto"><Image src={ShoesData[shoes].img4}/></Box>
            </Box>
            <Box>
                <Button bg="white" onClick={()=>bcde("1")}><MinusIcon/></Button>
                <Button bg="white" onClick={()=>bcde("2")}><MinusIcon/></Button>
                <Button bg="white" onClick={()=>bcde("3")}><MinusIcon/></Button>
            </Box>
        </Box>
        
    



    {/* Explore ===============================starting from here ============================================Explore*/}
    <Stack margin="2%" spacing={3}>
            <Text fontWeight="bold" textAlign="center" fontSize={{base:"3xl", md:"6xl"}}>Explore Essentials by Ukiyo</Text>
        </Stack>
        <LinkBox >
            <LinkOverlay href="Products">
            <Box  display="flex" textAlign="left"  w="95%" margin="auto">
                <Box></Box>
                <Box   m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-1536.jpg?v=1677063069&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Ned Joggers</Text><Text fontSize="xs" color="#26A69A">Rs. 525.00</Text></Box>
                <Box  m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-1708.jpg?v=1677066450&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Albin T-Shirt</Text><Text fontSize="xs" color="#26A69A">Rs. 440.00</Text></Box>
                <Box  m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-1555.jpg?v=1677064225&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Brian T-Shirt</Text><Text fontSize="xs" color="#26A69A">Rs. 642.00</Text></Box>
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-0148.jpg?v=1677063344&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Luke T-Shirt</Text><Text fontSize="xs" color="#26A69A">Rs. 800.00</Text></Box>
            </Box>
            <Box display="flex" textAlign="left"  w="95%" margin="auto">
                <Box  m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-0450.jpg?v=1677063752&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Evan T-Shirt</Text><Text fontSize="xs" color="#26A69A">Rs. 650.00</Text></Box>
                <Box  m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-1073.jpg?v=1677066827&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Acer Hoodie</Text><Text fontSize="xs" color="#26A69A">Rs. 720.00</Text></Box>
                <Box  m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-0059.jpg?v=1677061640&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Reuben Hoodie</Text><Text fontSize="xs" color="#26A69A">Rs. 1,200.00</Text></Box>
                <Box  m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-0176_8d7b88d6-1d80-4c72-8904-47ffb2faf5ba.jpg?v=1677065050&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Axel T-Shirt</Text><Text fontSize="xs" color="#26A69A">Rs. 520.00</Text></Box>
            </Box>
            <Button margin="2%" color="teal" size={{base:"sm", md:"lg"}}>
          View More
        </Button>
        </LinkOverlay>
   </LinkBox>
        
    
    
    
    
    </>
  )
}

export default Sneaker     
