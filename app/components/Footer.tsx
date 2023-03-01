import { Box, Container, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Logo from '../../public/logo.png';

export default function Footer() {
  return (
    <Box bg = 'black'>
        <Container maxW={1500}>
            <SimpleGrid textAlign={{lg: 'start', base:'center'}} spacing='30px' py='60px' templateColumns= 'repeat(4, 1fr)'>
                <Box>
                    <Heading pb= '20px' color='white'>About us</Heading>
                    <Image /*m={{base: 'auto', lg: '0'}}*/ src={Logo} alt ='panaverse-log' height={100}></Image>
                    
                    <Text pt='15px' pr='40px' color='gray'> The Future of the Web is Web 3.0, Metaverse, and Edge Computing, Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3.0 and Metaverse developers, designer, trainer, starup founders and service providers </Text>
                    
                    <Text></Text>
                </Box>
                <Box> 
                  <Heading color='white'>Useful Link </Heading>
                  <Grid pt='40px' color='gray'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Syllabus</Link>
                    <Link href='/'>Explore</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contact</Link>
                  </Grid>
                </Box>
                <Box>
                  <Heading color='white' >Follow Us</Heading>
                  <Grid pt='40px' color='gray'>
                    <Link href='/'>Facebook</Link>
                    <Link href='/'>Linkedin</Link>
                    <Link href='/'>Twitter</Link>
                    <Link href='/'>Youtubek</Link>
                    <Link href='/'>GitHub</Link>
                  </Grid>
                </Box>
                <Box>
                  <Heading color='white'>Contact Us</Heading>
                  <Grid pt='40px' color='gray'>
                    <Link href='/'>+92 320 0011221</Link>
                    <Link href='/'>name@gmail.com</Link>
                    <Link href='/'>Sialkot, Pakistan</Link>
                  </Grid>
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}
