import { useReducer } from "react";
import { 
    Box, 
    Center, 
    Circle, 
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
import { Button } from "@chakra-ui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";


declare global {
    interface Window {
      BaniPopUp: () => any;
    }
}

type ReducerAction = {
    type: "ADD" | "MINUS",
}

const intialQty: number = 1;

const quantityReducer = (state=intialQty, action: ReducerAction) => {
    switch(action.type) {
        case "ADD":
            return state + 1;
        case "MINUS":
            return state === 1 ? state: state - 1;
        default:
            return state;
    }
}

export const PaymentCard = () => {
    const [quantity, dispatch] = useReducer(quantityReducer, intialQty);

    return (
        <Card
            alignContent="space-between"
            overflow='hidden'
            variant='outline'
            bgColor='#fff'
            maxWidth='2xl'
            paddingX="4"
            paddingY="2"
            width="30rem"
            ml="2rem"
            px="4"
            boxShadow="sm"
            borderRadius="4"
        >
            <CardHeader mb="6">
                <Text variant='header1'>Payment for product</Text>
            </CardHeader>

            <Divider orientation="vertical" />

            <CardBody mb="6">
                <Flex justifyContent="space-between" alignItems="center" mb="6">
                    <Text variant="header2">Quantity</Text>

                    <HStack>
                        <Circle bgColor="#5444F2" p="2">
                            <Button 
                                onClick={() => dispatch({ type: "ADD" })}
                                variant="unstyled"
                            >
                                <AddIcon boxSize={4} color="#fff" />
                            </Button>
                        </Circle>

                        <Input 
                            value={quantity} 
                            textAlign="center"
                            color="#000" 
                            variant="outline" 
                            width="14" 
                            py={1}
                            borderRadius="4"
                        />

                        <Circle 
                            // bgColor=
                            style={{
                                backgroundColor: quantity > 1 ? "#5444F2" : "grey",
                                opacity: quantity > 1 ? 1 : 0.4
                            }}
                            p="2"
                        >
                            <Button 
                                disabled={quantity === 1}
                                bgColor={quantity === 1 ? "grey" : undefined}
                                onClick={() => dispatch({ type: "MINUS" })}
                                variant="unstyled"
                            >
                                <MinusIcon boxSize={4} color="#fff"/>
                            </Button>
                        </Circle>
                    </HStack>
                </Flex>
                
                <VStack spacing="2" align="flex-start">
                    <Text mb='8px' variant="header2">Total</Text>

                    <InputGroup>
                        <InputLeftAddon children='NGN' />
                        <Input 
                            width="100%" 
                            type='number' 
                            placeholder='0.00' 
                            textAlign="right"
                        />
                    </InputGroup>
                </VStack>
            </CardBody>

            <CardFooter py="6">
                <Button 
                    bgColor="#5444F2"
                    variant="filled"
                    width="100%"
                    onSubmit={() => console.log("paid")}
                    onClick={() => window.BaniPopUp()}
                    py="2.5"
                    borderRadius="6"
                    color="#fff"
                >
                    Pay ({(quantity * 1000).toLocaleString()})
                </Button>
            </CardFooter>
        </Card>

    )
}

