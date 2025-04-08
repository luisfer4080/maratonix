import { Button, Stack, Box, Text,Icon, Flex, Center} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const Nav = () =>{
    
    return (
        <Flex backgroundColor={"#EAEAEA"} h={"64px"} gap="4" justify="space-between" pl={"25px"} pr={"25px"}>
            <Flex marginEnd="auto">
                <Center>
                    <Text color={"#1D294A"} fontSize={"17px"}  fontWeight={"bolder"}>maratoni</Text>
                    <Text color={"#FF6700"} fontSize={"17px"}  fontWeight={"bolder"}>X</Text>
                </Center>
            </Flex>
            <Box mt={"auto"} mb={"auto"}>
                <Button colorPalette={"green"} p={"10px 40px 10px 40px"} borderRadius={"54px"} size={"lg"}>Sign up</Button>
                <Button colorPalette={"#1D294A"} ml={"12px"} p={"10px 40px 10px 40px"} borderRadius={"54px"} size={"lg"} variant={"surface"}>Log in</Button>
                <Button backgroundColor={"#EAEAEA"} ml={"12px"} color={"white"}>
                    <Icon size={"lg"} fontWeight={"bolder"} color={"#1D294A"}>
                        <FiMenu />
                    </Icon>
                </Button>
            </Box>
        </Flex>
    )
}

export default Nav;