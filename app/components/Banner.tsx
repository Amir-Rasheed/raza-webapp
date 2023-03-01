import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react';
import Image from 'next/image'
import Logo1 from '../../public/logo.png';
import Logo2 from '../../public/logo2.png';
import Syllabus from '../../public/Syllabus.png';

export default function Banner() {
  return (
  <>
    <Box bg='purple.500'>
        <Container maxW={1500}>
            <Flex pt={{lg:'150px', base:'30px'}} pb='100px' px= {{lg:'40px', base:'5px'}} display={{lg:'flex', base:'grid'}}>
                <Box flexBasis='50%' px='40px'>
                    <Heading color='black' size= '2xl'>Prepare yourself for the Next Generation of Internet with Panaverse</Heading>
                    <Text pt='10px'> One Year Panaverse Dao Earn as you learn Program  Consolidating Web 3.0. Metaverse, AL, Cloud Edge and Ambient Commputing/IoT Technologies</Text>
                    <Button mt='10px' size='lg' colorScheme='teal'>More Info</Button>
                </Box>
                <Box pt={{lg:'-80px', base:'0'}} flexBasis='50%' pl='100'>
                    <Image src={Logo2} alt='panaverse' width={500} height={300}></Image>
                </Box>
            </Flex>
        </Container>
    </Box>
    <Box>
        <Container maxW={1500}>
            <Flex gap={{lg:'100px',base:'10px'}} display={{lg:'flex', base:'grid'}}>
                <Box pl='40px' pt='50px' flexBasis='50%'>
                <Image src={Syllabus} alt='panaverse' width={300} height={100}></Image>
                </Box>
                
                <Box flexBasis='50%' pt={{lg:'80px', base:'10px'}} px={{lg:'0', base:'5px'}}>
                    <Heading  size='2xl'>Program Of Studies</Heading>
                    <Text pr='60px' pt='10px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                    <Button mb='10px' mt='10px' size='lg' colorScheme='blue'>Read More</Button>
                </Box>
            </Flex>
        </Container>
    </Box>

    <Box>
        <Container maxW={1500}>
            <Flex gap={{lg:'100px',base:'10px'}} display={{lg:'flex', base:'grid'}}>   
            <Box pl={{lg:'40px', base:'5px'}} flexBasis='50%' pt={{lg:'80px', base:'30px'}} px={{lg:'0', base:'5px'}}>
                    <Heading  size='2xl'>What is Panaverse DAO</Heading>
                    <Text pr='50px' pt='10px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                    <Button mb='20px' mt='10px' size='lg' colorScheme='blue'>Read More</Button>
                </Box>

                <Box pt='20px' flexBasis='50%'>
                <Image src={Logo1} alt='panaverse' width={300} height={100}></Image>
                </Box>
            </Flex>
        </Container>
    </Box>

    </>
  )
}
