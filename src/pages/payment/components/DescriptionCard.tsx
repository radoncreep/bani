import { 
    Box, 
    Flex, 
    HStack, 
    Link, 
    Spacer, 
    Stack, 
    StackDivider, 
    Text, 
    VStack 
} from "@chakra-ui/layout";
import { Card, CardBody, CardFooter, } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";

import BillingIcon from "../../../assets/blilingIcon.png";
import { useAppSelector } from "../../../app/hooks";
import { selectPaymentValue } from "../../../features/payment/paymentSlice";
import { APP_CONSTANTS } from "../../../constants";
import { AppIcon } from "../../../components/AppIcon";


export const PaymentDescription = () => {
    const paymentData = useAppSelector(selectPaymentValue);
    const icons = APP_CONSTANTS.ICONS;

    const socialIcons = [
        { name: "instagram", source: icons.instagram, target: paymentData?.page_instagram_handle },
        { name: "twitter", source: icons.twitter, target: paymentData?.page_twitter_handle },
        { name: "facebook", source: icons.facebook, target: paymentData?.page_fb_handle },
        { name: "whatsapp", source: icons.whatsapp, target: paymentData?.page_whatsapp_phone },
    ]
    
    return (
        <Card
            alignContent="space-between"
            overflow='hidden'
            variant='outline'
            bgColor='#fff'
            maxWidth='2xl'
            paddingX="4"
            paddingY="2"
            boxShadow="sm"
            borderRadius="4"
        >
            <Stack divider={<StackDivider bgColor="#00" />} spacing='4'>
                <CardBody>
                    <Flex justifyContent="flex-start">
                        {/* Icon */}
                        <Box mr="4">
                            <Image src={BillingIcon} width="6rem" />  
                        </Box>

                        <Flex direction="column">
                            <VStack spacing="6" align="flex-start" >
                                <Text variant="header1" >
                                    Billi Design
                                </Text>

                                <Link isExternal color="#65717C">
                                    https://bani.africa/billidesign
                                </Link>
                            </VStack>  

                            <Spacer gap={10}/>

                            <VStack spacing="1.5" align="flex-start" mt='4' >
                                <Text variant="header2"fontSize="16px" fontWeight="500" letterSpacing="wide">
                                    Payment description
                                </Text>

                                <Text fontSize='16px' color='#000' fontWeight='500'>
                                    {
                                        paymentData ? paymentData.page_description : 
                                        `Lorem ipsum dolor sit amet consectetur. Posuere elementumadipiscing a tincidunt in et nisi malesuada. 
                                        Tellus nunc nibh tincidunt tristique pellentesque nulla morbi tortor.`
                                    }
                                </Text>
                            </VStack>                                   
                        </Flex>
                    </Flex>
                </CardBody>

                <CardFooter py="4">
                    <HStack spacing={2}>
                        {socialIcons.map((icon, index) => (
                            <Link key={icon.name + index}>
                                <AppIcon 
                                    imageSource={icon.source}
                                    targetUrl={icon.target}
                                />
                            </Link>
                        ))}
                    </HStack>
                </CardFooter>
            </Stack>
        </Card>
    )
}
