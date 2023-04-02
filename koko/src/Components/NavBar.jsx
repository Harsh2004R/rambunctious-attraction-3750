import { ReactNode } from 'react';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  LinkOverlay,
  LinkBox
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';





const Links = ["Men's", "Women's" , 'Pins & Hat'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
      textSize:"md",
      fontWeight:"bold",
      color:"blue.200"
      

    }}
    href={'/Products'}>
    {children}
  </Link>
 
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Box w="95%" margin="auto">
      <Box  bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
           <LinkBox>
            <LinkOverlay href="/">
              <Box>
                <Image w="35%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpEJDfWBfElvH5vA1VReBVUEZ7IQAUSk5SBDprtkiLQ&usqp=CAU&ec=48600113"></Image>
                </Box>
                 </LinkOverlay>
                 </LinkBox>
            <HStack
              as={'nav'}
              spacing={16}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  
                  src={
                    "https://avatars.githubusercontent.com/u/115461808?s=400&u=af982e7f2301c48e2ecfeeda0fc96f137e96f000&v=4"
                  } 
                />
              </MenuButton>
              <MenuList>
                <LinkBox><LinkOverlay href={"/Signup"}><Box><MenuItem color="#90CAF9" fontWeight={"bold"}>Sign-up</MenuItem></Box></LinkOverlay></LinkBox>
                <LinkBox><LinkOverlay href={"/Login"}><Box><MenuItem color="#90CAF9" fontWeight={"bold"}>Login</MenuItem></Box></LinkOverlay></LinkBox>                <MenuDivider />
                <LinkBox><LinkOverlay href={"/Membership"}><Box> <MenuItem color="#546E7A" fontWeight={"bold"}>Membership</MenuItem></Box></LinkOverlay></LinkBox>
                <LinkBox><LinkOverlay href={"/Support"}><Box> <MenuItem color="#546E7A" fontWeight={"bold"}>Support</MenuItem></Box></LinkOverlay></LinkBox>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
      <Box p={2}></Box>


    </>
  );
}