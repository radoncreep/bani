import { 
    Box, 
    Center, 
    Container, 
    Divider, 
    Flex, 
    Grid, 
    GridItem, 
    HStack, 
    Link, 
    Spacer, 
    Stack, 
    StackDivider, 
    Text, 
    VStack 
} from "@chakra-ui/layout";
import { CustomerForm } from "./components/CustomerForm";


import { PaymentDescription } from "./components/DescriptionCard";
import { PaymentCard } from "./components/PaymentCard";


export const Payment = () => {
    return (
        <Center 
            backgroundColor="#ECEBF4" 
            height='100vh'
        >
            <Grid 
                templateColumns='repeat(2, 1fr)' 
                gap={4} 
            >
                <GridItem>
                    <VStack align="stretch" spacing="10">
                        <PaymentDescription />

                        <CustomerForm />
                    </VStack>
                </GridItem>
                
                <GridItem>
                    <PaymentCard />
                </GridItem>
            </Grid>
        </Center>
    )
}