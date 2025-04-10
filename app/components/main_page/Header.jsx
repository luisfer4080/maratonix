import { Button, Stack, Box, Text} from "@chakra-ui/react";
import Bgheader2 from "../../../public/bgheader2.webp";

const Header = () =>{
    const bgStyles = {
        backgroundImage: `url(${Bgheader2.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
    }


    return (
        <Stack style={bgStyles}>
            <Box mt={"150px"} mb={"auto"} ml={"60px"} w={"500px"}>
                <Text fontSize={"30px"} fontWeight={"bolder"} color={"#EAEAEA"}>
                    Descubre Maratonix y participa en la competencia entre colegios!
                </Text>
                <Text fontSize={"18px"} fontWeight={"bold"} color={"#EAEAEA"} mt={"40px"}>
                    Maratonix en una plataforma para probar tu conocimiento en diferentez quizes de Matematica, Ciencias, Historia y Cultura General. 
                </Text> 
                <Box mt={"40px"} ml={"5px"}>
                    <Button background={"#FFA82C"} color={"#EAEAEA"} p={"25px 55px 25px 55px"} borderRadius={"54px"} size={"lg"}>Demo</Button>
                </Box>
            </Box>
        </Stack>
    )
}

export default Header;