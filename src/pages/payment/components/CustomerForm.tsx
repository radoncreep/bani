import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Flex, HStack, SimpleGrid, Spacer, Stack, Text } from "@chakra-ui/layout";
import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";



export const CustomerForm = () => {
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
            <CardHeader mb={6}>
                <Text variant="header1">Customer Details</Text>
            </CardHeader>

            <CardBody>
                <Stack>
                    <FormControl isRequired>
                        <FormLabel>Your phone number</FormLabel>
                        <Flex justifyContent="space-between" gap={6}>
                            <Input type='email' />

                            <Input type='number' placeholder="09065012687" />
                        </Flex>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Your full name</FormLabel>
                        <Flex justifyContent="space-between" gap={6}>
                            <Input type='text' placeholder="First name"/>
                            <Input type='text' placeholder="Last name"/>
                        </Flex>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Your message</FormLabel>
                        <Input 
                            type='text' 
                            placeholder="Write a message here" 
                            height="40" 
                            variant="unstyled"
                            borderWidth={1}
                            borderColor="InactiveBorder"
                            borderRadius="6"
                        />
                    </FormControl>
                </Stack>
            </CardBody>
        </Card>
    )
}