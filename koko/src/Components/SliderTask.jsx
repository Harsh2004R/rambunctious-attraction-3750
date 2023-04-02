import React from 'react'
import {useState} from "react"
import {Box,Image,Text,Stack,Button,LinkBox,LinkOverlay} from "@chakra-ui/react";
import { NotAllowedIcon } from '@chakra-ui/icons'
const slider = [
    {
        id:1,
        image1:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3596-316.jpg?v=1677060232&width=360",
        image2:"https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-3576-310.jpg?v=1668171120&width=720",  
    },
    {
        id:2,
        image1:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3429-243.jpg?v=1677674173&width=360",
        image2:"https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-3419-238.jpg?v=1668171215&width=720",  
    },
    {
        id:3,
        image1:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-1073.jpg?v=1677066827&width=360",
        image2:"https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-1039.jpg?v=1667989969&width=720"
    }   
];
const slider2 = [
    {
        id:"1",
        img1:"https://cdn.shopify.com/s/files/1/0677/1464/6315/files/koovs-15july221220-158.jpg?v=1668326543&width=720",
        img2:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/Koovs-15july221220-158_a0b6949a-f628-4849-a587-ab8ce2a42b86.jpg?v=1677145630&width=360"
    },
    {
        id:"1",
        img1:"https://cdn.shopify.com/s/files/1/0677/1464/6315/files/cat2.jpg?v=1668327496&width=720",
        img2:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/Koovs-15july220221-17_72c697ac-9eb7-44d5-ad0f-8f5eeff64cd8.jpg?v=1677144404&width=360"
    },
    {
        id:"1",
        img1:"https://cdn.shopify.com/s/files/1/0677/1464/6315/files/koovs-15july222255-276.jpg?v=1668327627&width=720",
        img2:"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/Koovs-15july222245-275_3b31e18c-e5ba-432d-af3f-0c94520d6337.jpg?v=1677128873&width=360"
    }
]



function SliderTask() {
    
    const [slide,setSlide] = useState(0);
    
    const abcd = (val)=>{
        if (val==="one"){
            setSlide(0)
        }else if (val==="two"){
            setSlide(1)
        }else if (val==="three"){
            setSlide(2)
        }

    }
    const xyz = (val)=>{
        if (val==="one"){
            setSlide(0)
        }else if (val==="two"){
            setSlide(1)
        }else if (val==="three"){
            setSlide(2)
        }
    }

  return (
    <>

        <Stack margin="2%" spacing={3}>
            <Text textAlign="center" fontSize={{base:"3xl", md:"5xl"}}>Featured products</Text>
        </Stack>
    <Box width="95%" margin="auto" display="flex">
        <Box  m="auto">
            <Button bg="white" onClick={()=>abcd("one")}><NotAllowedIcon bg="black" borderRadius="50%"/></Button>
            <Button bg="white" onClick={()=>abcd("two")} ><NotAllowedIcon bg="black" borderRadius="50%"/></Button>
            <Button bg="white" onClick={()=>abcd("three")}><NotAllowedIcon bg="black" borderRadius="50%"/></Button>
        </Box>
        <Box margin="auto" >
            <Image border={{base:"2px solid black", md:"none"}} width="100%" src={slider[slide].image1}/>
        </Box>
        <Box m="auto">
            <Image border={{base:"3px solid black", md:"none"}} src={slider[slide].image2}/> 
        </Box>
    </Box>
    
    
    
    
    
    {/* Explore Ukiyo Women's=============================================================================================== */}
    

    <Stack margin="2%" spacing={3}>
            <Text textAlign="center" fontSize={{base:"2xl", md:"4xl"}}>Explore Ukiyo Women's</Text>
        </Stack>
        <LinkBox >
            <LinkOverlay href="Products">
            <Box  display="flex" textAlign="left"  w="95%" margin="auto">
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3344-203.jpg?v=1677061173&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Sport Tank Top Black</Text><Text fontSize="xs" color="#26A69A">Rs. 525.00</Text></Box>
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3429-243.jpg?v=1677674173&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Sunshine Soul Hoodie</Text><Text fontSize="xs" color="#26A69A">Rs. 440.00</Text></Box>
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3266-165.jpg?v=1677061418&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Race Club Baby Tee Off White</Text><Text fontSize="xs" color="#26A69A">Rs. 642.00</Text></Box>
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3293-178.jpg?v=1677061911&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Super Hoodie Lilac</Text><Text fontSize="xs" color="#26A69A">Rs. 800.00</Text></Box>
            </Box>
            <Box  display="flex" textAlign="left" w="95%" margin="auto">
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3617-325.jpg?v=1677061276&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A"> Dreams Tank Top</Text><Text fontSize="xs" color="#26A69A">Rs. 650.00</Text></Box>
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3361-211.jpg?v=1677061782&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Sunshine Soul Crop Top</Text><Text fontSize="xs" color="#26A69A">Rs. 720.00</Text></Box>
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3500-275.jpg?v=1677062239&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Sweatshirt Green</Text><Text fontSize="xs" color="#26A69A">Rs. 1,200.00</Text></Box>
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-3527-288.jpg?v=1677060528&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Juice Hoodie Off white</Text><Text fontSize="xs" color="#26A69A">Rs. 520.00</Text></Box>
            </Box>
            </LinkOverlay>
   </LinkBox>
   <LinkBox >
            <LinkOverlay href="Products">
            <Button margin="3%" color="teal" size={{base:"sm", md:"lg"}}>
          View More
        </Button>
        </LinkOverlay>
   </LinkBox>



        {/* Featured Products here=============================================================================================================================== */}


        <Stack margin="2%" spacing={3}>
            <Text textAlign="center" fontSize={{base:"3xl", md:"5xl"}}>Featured products</Text>
        </Stack>
    <Box  width="95%" margin="auto" display="flex">
        <Box m="auto">
            <Image border={{base:"2px solid black", md:"none"}} borderRadius="50%" src={slider2[slide].img1}/>  
        </Box>
        <Box margin="auto" >
            <Image border={{base:"2px solid black", md:"none"}} borderRadius="50%" src={slider2[slide].img2}/> 
        </Box>
        <Box m="auto">
            <Button  bg="white" onClick={()=>xyz("one")}><NotAllowedIcon bg="black" borderRadius="50%"/></Button>
            <Button bg="white" onClick={()=>xyz("two")} ><NotAllowedIcon bg="black" borderRadius="50%"/></Button>
            <Button bg="white" onClick={()=>xyz("three")}><NotAllowedIcon bg="black" borderRadius="50%"/></Button>
        </Box>
    </Box>
   





        {/*Explore brands Ukiyo Sport's  =====================================================Explore brands Ukiyo Sport's ============================================*/}
   
        <Stack margin="2%" spacing={3}>
            <Text textAlign="center" fontSize={{base:"2xl", md:"4xl"}}>Explore brands Ukiyo Sport's</Text>
        </Stack>
        <LinkBox >
            <LinkOverlay href="Products">
            <Box display="flex" textAlign="left"  w="95%" margin="auto">
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-2243.jpg?v=1677135507&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">sport cropped hoodie</Text><Text fontSize="xs" color="#26A69A">Rs. 1,525.00</Text></Box>
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-2811.jpg?v=1677136610&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Scuba shorts</Text><Text fontSize="xs" color="#26A69A">Rs. 640.00</Text></Box>
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-2609.jpg?v=1677132596&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Breathe Cropped sweatshirt</Text><Text fontSize="xs" color="#26A69A">Rs. 1,242.00</Text></Box>
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-2152.jpg?v=1677132415&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Cropped zip sport hoodie</Text><Text fontSize="xs" color="#26A69A">Rs. 1,800.00</Text></Box>
            </Box>
            <Box display="flex" textAlign="left" w="95%" margin="auto">
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-2411.jpg?v=1677134247&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Oversized Sweatshirt</Text><Text fontSize="xs" color="#26A69A">Rs. 1,650.00</Text></Box>
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-2878.jpg?v=1677142554&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Patterened legging</Text><Text fontSize="xs" color="#26A69A">Rs. 1,720.00</Text></Box>
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-2911.jpg?v=1677136428&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">long sleeve crop top</Text><Text fontSize="xs" color="#26A69A">Rs. 1,800.00</Text></Box>
                <Box m="1%"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-2871.jpg?v=1677135121&width=360"/><Text fontSize="xs" color="#607D8B" >Essentials by Ukiyo</Text><Text fontWeight="bold" color="#546E7A">Sculpt shorts</Text><Text fontSize="xs" color="#26A69A">Rs. 820.00</Text></Box>
            </Box>
            <Button margin="3%" color="teal" size={{base:"sm", md:"lg"}}>
          View More
        </Button>
        </LinkOverlay>
   </LinkBox>




            {/* Brands on Ukiyo=============================================Brands on Ukiyo=====================================================Brands on Ukiyo=================================Brands on Ukiyo */}



            <Stack margin="2%" spacing={3}>
            <Text textAlign="center" fontSize={{base:"2xl", md:"4xl"}}>Brands on Ukiyo</Text>
        </Stack>

            <Box  width="95%" m="auto">
                <Box  display="flex" w="95%" margin="auto">
                    <Box m="auto"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/koovs_logo_for_brand_page-03.jpg?v=1668331785&width=360"/></Box>
                    <Box m="auto"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/essentials_logo-02.jpg?v=1668331830&width=360"/></Box>
                    <Box m="auto"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/kangol_logo-01.jpg?v=1668331868&width=360"/></Box>
                    <Box m="auto"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logo-01.png?v=1668331907&width=360"/></Box>
                    <Box m="auto"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logo-02.png?v=1668331923&width=360"/></Box>
                    <Box m="auto"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Ball_logo.jpg?v=1668332152&width=360"/></Box>
                    <Box m="auto"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/logo-04.jpg?v=1668332188&width=360"/></Box>
                    <Box m="auto"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/logo-02.jpg?v=1668332226&width=360"/></Box>
                </Box>
                <Box w="95%" display="flex" margin="auto">   
                    <Box m="auto"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-08.jpg?v=1668332439&width=360"/></Box>
                    <Box m="auto"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-07.jpg?v=1668332432&width=360"/></Box>
                    <Box m="auto"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-09.jpg?v=1668332464&width=360"/></Box>
                    <Box m="auto"><Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_3951c2d8-141f-43a4-8065-9cca52dac9dd.jpg?v=1668332482&width=360"/></Box>
                </Box>
            </Box>
        </>
  )
}
export default SliderTask;
