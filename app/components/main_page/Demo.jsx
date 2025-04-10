import { Stack, Center, Text, Image, Flex, Box, Button } from "@chakra-ui/react";

const Demo = () => {
    return (
        <Stack bgColor={"#EAEAEA"} h={"70vh"}>
            <Center>
                <Text fontSize={"25px"} fontWeight={"bold"} color={"black"} mt={"75px"}>
                    Lorem Ipsum Dolor Sit Amet
                </Text>
            </Center>
            <Box mt={"40px"} ml={"auto"} mr={"auto"} mb={"75px"}>
                <Button background={"#FFA82C"} color={"#EAEAEA"} p={"25px 55px 25px 55px"} borderRadius={"54px"} size={"lg"}>Try it for free</Button>
            </Box>
        </Stack>
    )
}

export default Demo