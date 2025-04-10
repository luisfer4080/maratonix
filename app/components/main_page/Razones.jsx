import { Stack, Center, Text, Image, Flex, Box } from "@chakra-ui/react";
import Grid1 from "../../../public/grid1.jpeg";
import Grid2 from "../../../public/grid2.jpeg";
import Grid3 from "../../../public/grid3.jpeg";
import Grid4 from "../../../public/grid4.jpg";
import Grid5 from "../../../public/grid5.jpeg";
import Grid6 from "../../../public/grid6.jpeg";
import Grid7 from "../../../public/grid7.jpeg";
import Grid8 from "../../../public/grid8.jpeg";

const Razones = () => {
    return (
        <Stack h={"120vh"} w={"100%"} bgColor={"#004E97"} p={"0px 22px 0px 22px"}>
            <Center>
                <Text fontSize={"25px"} fontWeight={"bold"} color={"#EAEAEA"} mt={"75px"} mb={"40px"}>
                    Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit
                </Text>
            </Center>
            <Flex wrap={"wrap"} mb={"75px"} justify={"center"} >
                <Stack w={"20%"} gap="0px" m={"0px 15px 15px 0px"} transition={"transform 0.2s ease-out"} willChange={"transform"} _hover={{transform: "scale(1.05)"}}>
                    <Image w="100%" h="161px" borderTopLeftRadius={"15px"} borderTopRightRadius={"15px"} src={Grid1.src} />
                    <Center backgroundColor={"#FFA82C"} borderRadius={"0px 0px 15px 15px"} h={"40px"}><Text color={"#EAEAEA"} fontWeight={"bold"}>Id hinc integre malorum vix</Text></Center>
                </Stack>
                <Stack w={"20%"} gap="0px" m={"0px 15px 15px 0px"} transition={"transform 0.2s ease-out"} willChange={"transform"} _hover={{transform: "scale(1.05)"}}>
                    <Image w="100%" h="161px" src={Grid2.src} borderTopLeftRadius={"15px"} borderTopRightRadius={"15px"} />
                    <Center backgroundColor={"#FFA82C"} borderRadius={"0px 0px 15px 15px"} h={"40px"}><Text color={"#EAEAEA"} fontWeight={"bold"} >Sed ut dolor albucius senserit</Text></Center>
                </Stack>
                <Stack w={"20%"} gap="0px" m={"0px 15px 15px 0px"} transition={"transform 0.2s ease-out"} willChange={"transform"} _hover={{transform: "scale(1.05)"}}>
                    <Image w="100%" h="161px" src={Grid3.src} borderTopLeftRadius={"15px"} borderTopRightRadius={"15px"} />
                    <Center backgroundColor={"#FFA82C"} borderRadius={"0px 0px 15px 15px"} h={"40px"}><Text color={"#EAEAEA"} fontWeight={"bold"}>Id primis ridens assueverit vel</Text></Center>
                </Stack>
                <Stack w={"20%"} gap="0px" m={"0px 0px 15px 0px"} transition={"transform 0.2s ease-out"} willChange={"transform"} _hover={{transform: "scale(1.05)"}}>
                    <Image w="100%" h="161px" src={Grid4.src} borderTopLeftRadius={"15px"} borderTopRightRadius={"15px"} />
                    <Center backgroundColor={"#FFA82C"} borderRadius={"0px 0px 15px 15px"} h={"40px"}><Text color={"#EAEAEA"} fontWeight={"bold"}>Nec apeirian mediocritatem in</Text></Center>
                </Stack>
                <Stack w={"20%"} gap="0px" m={"0px 15px 15px 0px"} transition={"transform 0.2s ease-out"} willChange={"transform"} _hover={{transform: "scale(1.05)"}}>
                    <Image w="100%" h="161px" src={Grid5.src} borderTopLeftRadius={"15px"} borderTopRightRadius={"15px"} />
                    <Center backgroundColor={"#FFA82C"} borderRadius={"0px 0px 15px 15px"} h={"40px"}><Text color={"#EAEAEA"} fontWeight={"bold"}>No porro periculis mel</Text></Center>
                </Stack>
                <Stack w={"20%"} gap="0px" m={"0px 15px 15px 0px"} transition={"transform 0.2s ease-out"} willChange={"transform"} _hover={{transform: "scale(1.05)"}}>
                    <Image w="100%" h="161px" src={Grid6.src} borderTopLeftRadius={"15px"} borderTopRightRadius={"15px"} />
                    <Center backgroundColor={"#FFA82C"} borderRadius={"0px 0px 15px 15px"} h={"40px"}><Text color={"#EAEAEA"} fontWeight={"bold"}>Soleat repudiare dissentias eam ut</Text></Center>
                </Stack>
                <Stack w={"20%"}gap="0px" m={"0px 15px 15px 0px"} transition={"transform 0.2s ease-out"} willChange={"transform"} _hover={{transform: "scale(1.05)"}}>
                    <Image w="100%" h="161px"src={Grid7.src} borderTopLeftRadius={"15px"} borderTopRightRadius={"15px"} />
                    <Center backgroundColor={"#FFA82C"} borderRadius={"0px 0px 15px 15px"} h={"40px"}><Text color={"#EAEAEA"} fontWeight={"bold"}>Sit adipisci consulatu in</Text></Center>
                </Stack>
                <Stack w={"20%"} gap="0px" m={"0px 0px 15px 0px"} transition={"transform 0.2s ease-out"} willChange={"transform"} _hover={{transform: "scale(1.05)"}}>
                    <Image w="100%" h="161px" src={Grid8.src} borderTopLeftRadius={"15px"} borderTopRightRadius={"15px"} />
                    <Center backgroundColor={"#FFA82C"} borderRadius={"0px 0px 15px 15px"} h={"40px"}><Text color={"#EAEAEA"} fontWeight={"bold"}>At augue docendi inciderint mea</Text></Center>
                </Stack>
            </Flex>
        </Stack>
    )
}

export default Razones;