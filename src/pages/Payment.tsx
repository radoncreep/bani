import { 
    Box, 
    Center, 
    Container, 
    Flex, 
    Link, 
    Text, 
    VStack 
} from "@chakra-ui/layout";
import { Card, CardHeader, CardBody, CardFooter, } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";


export const Payment = () => {
    return (
        <Center>
            <Box>
                <VStack>
                    <Card>
                        <CardHeader>
                            <Flex>
                                {/* Icon */}
                                <Image src={require('../assets/billingIcon')}/>

                                <VStack spacing="1rem" >
                                    <Text fontSize='16px' color='#000' fontWeight='500'>
                                        Billi Design
                                    </Text>

                                    <Link isExternal>
                                        https://bani.africa/billidesign
                                    </Link>
                                </VStack>                                
                            </Flex>
                        </CardHeader>
                    </Card>
                </VStack>
            </Box>
        </Center>
    )
}