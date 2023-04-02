import React from 'react'
import Footer from '../Components/Footer'
import NavBar from "../Components/NavBar"
import {Text,Button,Box, SimpleGrid} from "@chakra-ui/react"
import { Select } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import Post from "../Page/Post";
import { Spinner } from '@chakra-ui/react'
import axios from "axios";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1)
  const [filter,setfilter]=useState(null)
const [order,setorder]=useState("asc")
  
  function getData(){
    return axios.get(`http://localhost:8080/allPro`,{
      params:{
        _limit:4,
          _page:page,
          categroy:filter,
          _sort:"price",
          _order:order

      }
    })
  }

  const functionfetch = async () => {
    setLoading(true);
    try {
     
      let users = await getData();
      setData(users.data);
      // console.log(data)
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    functionfetch();
  }, [filter,page,order]);

 
  const handlepage = (val) => {
    setPage(page+val);
  };
  
  if (loading) {
    return (
      <Box>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Box>
    );
  }
  return (
    <>
    <NavBar/>
   
  
 
  <Box w="95%" m="auto">
  <SimpleGrid columns={{base:"2",md:"2"}}>
  <Select m="auto" bgColor="#" value={filter} onChange={(e)=>setfilter(e.target.value)} placeholder='Category' width="20%" >
  {/* <option value=''>Filter</option> */}
  <option value='women'>Women</option>
  <option value='men'>Men</option>
  <option value='cap'>Cap</option>
  <option value='shoes'>Shoes</option>
 </Select>
  <Select m="auto" bgColor="#" value={order} onChange={(e)=>setorder(e.target.value)} placeholder='Price' width="20%" >
  <option value='asc'>Low-To-Hight</option>
  <option value='desc' >Height-to-Low</option>
   </Select>
  </SimpleGrid>
  </Box>

   


   
    <Text pt="3%" textAlign="center"  fontSize={{base:"3xl" , md:"6xl"}}>Welcome in Ukiyo</Text>
    
      
      <Box >
      




        {data.map((el) => {
          return <Post img={el.img} key={el.id} title={el.title}  price={el.price} ratings={el.ratings}/>;
        })}
        
      </Box>
      
      <Box paddingTop="2%"  margin="auto">
        <Button  color="teal"  size={{base:"sm", md:"lg"}} disabled={page === 1}  onClick={()=>handlepage(-1)}>
          Prev
        </Button>
        <Button color="teal"  size={{base:"sm", md:"lg"}} disabled>{page}</Button>
        <Button color="teal"  size={{base:"sm", md:"lg"}} onClick={()=>handlepage(1)}>Next</Button>
      </Box>




    



















    <Footer/>
    </>
  )
}

export default Products
