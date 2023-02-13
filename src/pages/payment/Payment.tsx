import { useEffect } from "react";
import { 
    Center, 
    Grid, 
    GridItem, 
    VStack 
} from "@chakra-ui/layout";

import { CustomerForm } from "./components/CustomerForm";
import { PaymentDescription } from "./components/DescriptionCard";
import { PaymentCard } from "./components/PaymentCard";
import { fetchPayment, selectPaymentValue } from "../../features/payment/paymentSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";


export const Payment = () => {
    const page_ref = "donate-vera-wangg";
    const paymentData = useAppSelector(selectPaymentValue);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPayment(page_ref));
    }, []);
    
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