import { Flex, Stack, Text, Link} from "@chakra-ui/react";

const Footer = () => {
    return (
        <Stack bgColor={"#1D294A"} h={"95vh"}>
            <Flex gap={"120px"} mb={"20px"} m={"45px 39px 40px"} pl={"24px"} pr={"24px"}>
                <Stack>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"bold"} mb={"15px"}>Product</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"500"}>Qui verterem</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"500"}>Ex gubergren</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"500"}>Consectetuer</Text>
                </Stack>
                <Stack>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"bold"} mb={"15px"}>Solutions</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Qui verterem</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Ex gubergren</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Consectetuer</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Qui verterem</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Ex gubergren</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Consectetuer</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Qui verterem</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Ex gubergren</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Consectetuer</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Qui verterem</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Ex gubergren</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Consectetuer</Text>
                </Stack>
                <Stack>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"bold"} mb={"15px"}>Solutions</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Qui verterem</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Ex gubergren</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Consectetuer</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Qui verterem</Text>
                </Stack>
                <Stack>
                <Text color={"white"} fontSize={"16px"} fontWeight={"bold"} mb={"15px"}>Solutions</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Qui verterem</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Ex gubergren</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Consectetuer</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Qui verterem</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Ex gubergren</Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={"300"}>Consectetuer</Text>
                </Stack>
            </Flex>
            <Flex justify={"space-between"} m={"0px 39px"} pl={"24px"} pr={"24px"}>
                <Text color={"white"} fontSize={"16px"} fontWeight={"bold"}>© 2025 Maratonix</Text>
                <Flex gap={"10"} align={"center"}>
                    <Link color={"white"} fontSize={"16px"} fontWeight={"bold"} mt={"auto"} variant="underline">Privacy Policy</Link>
                    <Link color={"white"} fontSize={"16px"} fontWeight={"bold"} mt={"auto"} variant="underline">Terms and Conditions</Link>
                </Flex>
            </Flex>
        </Stack>
    )
}

export default Footer;