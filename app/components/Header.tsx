
import { Box, Button, Container, Flex, Menu, IconButton, MenuButton, MenuItem, MenuList, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image'
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import React from 'react'
import Logo from '../../public/logo.png';

export default function Header() {
  return (
    <Box boxShadow='lg'>
      <Container maxW={1500}>
        <SimpleGrid templateColumns={{lg:'repeat(3, 1fr)', base:'repeat(2, 1fr)'}}>
          <Box>
              <Image src={Logo} alt = 'panaverse-log' height={100}></Image>  
          </Box>

          <Flex display={{lg:'flex', base:'none'}} placeItems='center' color ='black' fontSize={20} fontWeight= 'semibold' gap={10}>
              <Link href=''>Home</Link>
              <Link href=''>Syllabus</Link>
              <Link href=''>Explore</Link>
              <Link href=''>About</Link>
              <Link href=''>Contract</Link>
          </Flex>

          <Box display={{lg:'initial', base:'none'}}>
            <Button mt='18px' size = 'lg' colorScheme='blue' float='right' >Apply</Button>
          </Box>
          <Box pt='20px' display={{lg: 'none', base: 'initial'}}>
            <Menu>
              <MenuButton float='right'
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='obtline'
                 />
                <MenuList>
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Syllabus</MenuItem>
                  <MenuItem>Explore</MenuItem>
                  <MenuItem>About</MenuItem>
                  <MenuItem>Contact</MenuItem>
                </MenuList>            
            </Menu>
          </Box>

        </SimpleGrid>
      </Container>
    </Box>
  )
}
