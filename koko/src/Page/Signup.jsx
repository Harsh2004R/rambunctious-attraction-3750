


import React, { useReducer } from 'react'
import 'firebase/storage'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Center,
  } from '@chakra-ui/react';
  import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import NavBar from "../Components/NavBar"
  import Footer from "../Components/Footer"

import { auth } from '../Page/FireBase';
import {  createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
const iniitalstate={
  email:"",
  password:"",
  firstname:"",
  img:""
}
const reducer=(state,action)=>{
 switch(action.type){
  case "email":{
    return {...state,
      email:action.payload
    }
  }
  case "firstname":{
    return {...state,
      firstname:action.payload
    }
  }
  case "img":{
    return {...state,
      img:action.payload
    }
  }
  case "password":{
    return {...state,
      password:action.payload
    }
  }
  case "reset":{
    return    iniitalstate
  }
  default:{
  return    iniitalstate
  }
 }
}

  export default function SingUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [state,dispach]=useReducer(reducer,iniitalstate)
    const handleclick= async ()=>{
      try {
        await createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
          dispach({type:"reset"})
          alert("succesful singin")
          const user = userCredential.user;
          console.log(user)
        })
      }catch (error) {
        console.log(error)
      }
    
    }
    const {email,password,firstname,img}=state
    return (
        <>
        <NavBar/>
        <Box  w="95%"  m="auto" bgColor="##ECEFF1">
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
        bgColor="##ECEFF1"
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={{base:"4xl",md:"6xl"}} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
             🥳
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel color="blue.600">UserName</FormLabel>
                    <Input type="text" value={firstname} onChange={(e)=>dispach({type:"firstname",payload:e.target.value})} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel  color="blue.600">About(opt)😥</FormLabel>
                    <Input type="text"  onChange={(e)=>dispach({type:"img",payload:e.target.value})} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel color="blue.600">Email address</FormLabel>
                <Input type="email" value={email} onChange={(e)=>dispach({type:"email",payload:e.target.value})} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel color="blue.600">Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  value={password} onChange={(e)=>dispach({type:"password",payload:e.target.value})} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  onClick={handleclick}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link  href={"/login"} color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      {/* socal media part Here */}
      <Center p={8} mt={"-8%"}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        {/* Facebook */}
        <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>

        {/* LinkedIn */}
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
          <Center>
            <Text>Send to Linkedin</Text>
          </Center>
        </Button>

        {/* Messenger */}
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiMessenger />}>
          <Center>
            <Text>Send to Messenger</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
    </Box>
      <Footer/>
      </>
    );
  }