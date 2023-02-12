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

import BillingIcon from "../assets/blilingIcon.png";
import { PaymentDescription } from "./components/DescriptionCard";


export const Payment = () => {
    return (
        <PaymentDescription />
    )
}