import { 
    Box, 
    Center, 
    Container, 
    Divider, 
    Flex, 
    HStack, 
    Link, 
    Spacer, 
    Stack, 
    StackDivider, 
    Text, 
    VStack 
} from "@chakra-ui/layout";
import { Card, CardHeader, CardBody, CardFooter, } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';

import BillingIcon from "../../../assets/blilingIcon.png";


export const PaymentDescription = () => {
    return (
        <Center 
            backgroundColor="#ECEBF4" 
            height='100vh'
        >
            <Box>
                <Stack divider={<StackDivider bgColor="#00" />} spacing='10'>
                    <Card
                        // direction={{ base: 'column', sm: 'row' }}
                        alignContent="space-between"
                        overflow='hidden'
                        variant='outline'
                        bgColor='red'
                        maxWidth='2xl'
                        paddingX="4"
                        paddingY="2"
                    >
                        <CardBody>
                            <Flex justifyContent="flex-start">
                                {/* Icon */}
                                <Box mr="4">
                                    <Image src={BillingIcon} width="6rem" />  
                                </Box>

                                <Flex direction="column">
                                    <VStack spacing="6" align="flex-start" >
                                        <Text fontSize='16px' color='#000' fontWeight='500' lineHeight={0.5}>
                                            Billi Design
                                        </Text>

                                        <Link isExternal>
                                            https://bani.africa/billidesign
                                        </Link>
                                    </VStack>  

                                    <Spacer gap={10}/>

                                    <VStack spacing="1.5" align="flex-start" mt='4' >
                                        <Text fontSize='16px' color='#000' fontWeight='500'>
                                            Payment description
                                        </Text>

                                        <Text fontSize='16px' color='#000' fontWeight='500'>
                                            Lorem ipsum dolor sit amet consectetur. Posuere elementum
                                            adipiscing a tincidunt in et nisi malesuada. Tellus nunc nibh 
                                            tincidunt tristique pellentesque nulla morbi tortor.
                                        </Text>
                                    </VStack>                                   
                                </Flex>
                            </Flex>
                        </CardBody>

                        {/* <Divider /> */}

                        <CardFooter >
                            <HStack spacing={1}>
                                <AiFillTwitterCircle size={24} />
                                <AiOutlineWhatsApp size={24} />
                                <GrFacebookOption  size={24} />
                            </HStack>
                        </CardFooter>
                    </Card>
                </Stack>
            </Box>
        </Center>
    )
}