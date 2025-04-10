import { Stack, Center, Text, Image, Flex, Box } from "@chakra-ui/react";
import Comentario1 from "../../../public/persons/comentario1.jpg";
import Comentario2 from "../../../public/persons/comentario2.jpg";
import Comentario3 from "../../../public/persons/comentario3.jpg";

const Comments = () => {

    return (
       <Stack bgColor={"#EAEAEA"} h={"160vh"}>
            <Center>
                <Text fontSize={"25px"} fontWeight={"bold"} color={"black"} mt={"75px"} mb={"75px"}>
                    Lorem ipsum dolor sit amet
                </Text>
            </Center>
            <Flex mb={"75px"} justify={"center"}>
                <Box w={"10%"}>
                    <Image width={"110px"} height={"110px"} borderRadius={"50%"} src={Comentario1.src}/>
                </Box>
                <Stack w={"70%"} h={"200px"} backgroundColor={"white"} p={"40px"} borderRadius={"15px"}>
                    <Text fontSize={"18px"} color={"black"} fontWeight={"bolder"}>Audiam Periculis Aliquando</Text>
                    <Text fontSize={"18px"} color={"black"} fontWeight={"bolder"}>Eu vim facer graece nusquam decore</Text>
                    <Text ontSize={"15px"} fontWeight={"light"} color={"black"}>
                        "At ius harum eligendi dissentiunt. Eum cu mucius animal contentiones, 
                        ea vim quidam aliquando. Facilis graecis ne nam, soluta blandit efficiendi 
                        duo ne. Est quot mucius omnium ad."
                    </Text>
                </Stack>
            </Flex>
            <Flex mb={"75px"} justify={"center"}>
                <Stack w={"70%"} h={"200px"} backgroundColor={"white"} p={"40px"} borderRadius={"15px"}>
                    <Text fontSize={"18px"} color={"black"} fontWeight={"bolder"}>Audiam Periculis Aliquando</Text>
                    <Text fontSize={"18px"} color={"black"} fontWeight={"bolder"}>Eu vim facer graece nusquam decore</Text>
                    <Text ontSize={"15px"} fontWeight={"light"} color={"black"}>
                        "At ius harum eligendi dissentiunt. Eum cu mucius animal contentiones, 
                        ea vim quidam aliquando. Facilis graecis ne nam, soluta blandit efficiendi 
                        duo ne. Est quot mucius omnium ad."
                    </Text>
                </Stack>
                <Box w={"10%"} ml={"25px"}>
                    <Image width={"110px"} height={"110px"} borderRadius={"50%"} src={Comentario2.src}/>
                </Box>
            </Flex>
            <Flex mb={"75px"} justify={"center"}>
                <Box w={"10%"}>
                    <Image width={"110px"} height={"110px"} borderRadius={"50%"} src={Comentario3.src}/>
                </Box>
                <Stack w={"70%"} h={"200px"} backgroundColor={"white"} p={"40px"} borderRadius={"15px"}>
                    <Text fontSize={"18px"} color={"black"} fontWeight={"bolder"}>Audiam Periculis Aliquando</Text>
                    <Text fontSize={"18px"} color={"black"} fontWeight={"bolder"}>Eu vim facer graece nusquam decore</Text>
                    <Text ontSize={"15px"} fontWeight={"light"} color={"black"}>
                        "At ius harum eligendi dissentiunt. Eum cu mucius animal contentiones, 
                        ea vim quidam aliquando. Facilis graecis ne nam, soluta blandit efficiendi 
                        duo ne. Est quot mucius omnium ad."
                    </Text>
                </Stack>
            </Flex>
       </Stack> 
    )
}

export default Comments;