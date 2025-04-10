import { Stack, Center, Text, Image, Flex, Box, Button, Link } from "@chakra-ui/react";

const Contact = () => {

    return (
        <Flex backgroundColor={"#3A6EA4"} h={"64px"} gap="4" justify="space-between" pl={"25px"} pr={"25px"}>
            <Flex align={"center"} gap={"4"} ml="39px">
                <Link color={"white"} fontSize={"16px"} fontWeight={"bold"} mt={"auto"} mb={"auto"}>correo1@gmail.com</Link>
                <Link color={"white"} fontSize={"16px"} fontWeight={"bold"} mt={"auto"} mb={"auto"}>correo2@gmail.com</Link>
            </Flex>
            <Flex gap={"4"} align={"center"} mr={"39px"}>
                <Text color={"white"} fontSize={"16px"} fontWeight={"bold"} ml={"8px"}>Follow Us:</Text>
                <Text color={"white"} fontSize={"16px"} fontWeight={"bold"} ml={"8px"}>Facebook</Text>
                <Text color={"white"} fontSize={"16px"} fontWeight={"bold"} ml={"8px"}>Instagram</Text>
                <Text color={"white"} fontSize={"16px"} fontWeight={"bold"} ml={"8px"}>Linkedin</Text>
            </Flex>
        </Flex>
    )
}

export default Contact;