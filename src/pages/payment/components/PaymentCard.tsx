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
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";

export const PaymentCard = () => {
    return (
        <Card>
            <CardHeader>
                <Text>Paymnet for product</Text>
            </CardHeader>

            <CardBody>
                <InputGroup>
                    <InputLeftAddon children='NGN' />
                    <Input type='number' placeholder='0.00' />
                </InputGroup>
            </CardBody>
        </Card>

    )
}