import { Button, Box, Text, Center, Grid, Image, Stack} from "@chakra-ui/react";

const Schools = () => {

    return (
        <Stack bgColor={"#EAEAEA"}>
            <Center>
                <Text fontSize={"25px"} fontWeight={"bold"} color={"black"} mt={"50px"} mb={"40px"}>
                    Colegios Que Participan en Maratonix
                </Text>
            </Center>
            <Grid templateColumns="repeat(5, 1fr)" gap="9" ml={"auto"} mr={"auto"} mb={"50px"}>
                <Center><Text fontSize={"16px"}  color={"black"}>Escuela Excelia</Text></Center>
                <Center><Text fontSize={"16px"}  color={"black"}>Centro InnovaLearn</Text></Center>
                <Center><Text fontSize={"16px"}  color={"black"}>Academia StudySphere</Text></Center>
                <Center><Text fontSize={"16px"}  color={"black"}>Escuela AcuQuest</Text></Center>
                <Center><Text fontSize={"16px"}  color={"black"}>Instituto ProLearn</Text></Center>
            </Grid>
        </Stack>
    )
} 

export default Schools;