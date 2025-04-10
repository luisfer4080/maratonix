import { Stack, Center, Text, Flex, Box, Image } from "@chakra-ui/react";
import Service1 from "../../../public/about/service-1.png";
import Service2 from "../../../public/about/service-2.png";
import Service3 from "../../../public/about/service-3.png";

const About = () => {
    return (
        <Stack bgColor={"#EAEAEA"} h={"210vh"}>
            <Center>
                <Text fontSize={"25px"} fontWeight={"bold"} color={"black"} mt={"75px"} mb={"75px"}>
                    Audiam periculis aliquando ius te mei no fugit nobis periculis
                </Text>
            </Center>
            <Flex mb={"75px"} justify={"center"} maxH={"280px"}>
                <Stack w={"45%"} mb={"auto"} mt={"auto"} p={"20px"}>
                    <Text fontSize={"20px"} fontWeight={"bold"} color={"black"}>
                        Tale mentitum cu cum eu mea sint bonorum
                    </Text>
                    <Text fontSize={"18px"} fontWeight={"light"} color={"black"}>
                        Elaboraret suscipiantur et pri, eam labore tamquam ut. Sit quis ceteros 
                        prodesset et. In has atqui mediocritatem, ex sadipscing neglegentur usu. 
                        Quo eu saepe percipit hendrerit. An essent petentium deterruisset has, 
                        te nulla facilisis dissentiet per. Fuisset minimum corpora mei ei.
                    </Text>
                </Stack>
                <Box w={"45%"} maxH={"280px"}>
                    <Image h={"100%"} w={"100%"} objectFit={"fill"} src={Service1.src} />
                </Box>
            </Flex>
            <Flex mb={"50px"} justify={"center"} maxH={"280px"}>
                <Box w={"45%"} maxH={"280px"}>
                    <Image h={"100%"} w={"100%"} objectFit={"fill"} src={Service2.src}/>
                </Box>
                <Stack w={"45%"} mb={"auto"} mt={"auto"} p={"20px"}>
                    <Text fontSize={"20px"} fontWeight={"bold"} color={"black"}>
                        Tale mentitum cu cum eu mea sint bonorum
                    </Text>
                    <Text fontSize={"18px"} fontWeight={"light"} color={"black"}>
                        Elaboraret suscipiantur et pri, eam labore tamquam ut. Sit quis ceteros 
                        prodesset et. In has atqui mediocritatem, ex sadipscing neglegentur usu. 
                        Quo eu saepe percipit hendrerit. An essent petentium deterruisset has, 
                        te nulla facilisis dissentiet per. Fuisset minimum corpora mei ei.
                    </Text>
                </Stack>
            </Flex>
            <Flex justify={"center"} maxH={"280px"}>
                <Stack w={"45%"} mb={"auto"} mt={"auto"} p={"20px"}>
                    <Text fontSize={"20px"} fontWeight={"bold"} color={"black"}>
                        Tale mentitum cu cum eu mea sint bonorum
                    </Text>
                    <Text fontSize={"18px"} fontWeight={"light"} color={"black"}>
                        Elaboraret suscipiantur et pri, eam labore tamquam ut. Sit quis ceteros 
                        prodesset et. In has atqui mediocritatem, ex sadipscing neglegentur usu. 
                        Quo eu saepe percipit hendrerit. An essent petentium deterruisset has, 
                        te nulla facilisis dissentiet per. Fuisset minimum corpora mei ei.
                    </Text>
                </Stack>
                <Box w={"45%"} maxH={"280px"}>
                    <Image h={"100%"} w={"100%"} objectFit={"fill"} src={Service3.src}/>
                </Box>
            </Flex>
        </Stack>
    )
}

export default About;