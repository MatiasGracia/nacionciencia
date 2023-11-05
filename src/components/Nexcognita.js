import React from 'react';
import { Box, Center, Image, Text } from '@chakra-ui/react';
import paisaje from './imagenes/paisaje.jpg'; // Asume que esta es la imagen que quieres usar. Cambia si es necesario.

function Nexcognita() {
  return (
    <Box>
      <Box
        bgImage={paisaje}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height={["300px", "450px"]}
        color="white"
        py={4}
      >
        <Center height="100%">
          <Text fontSize={["2xl", "5xl"]} fontWeight="bold">
            NEXCOGNITA
          </Text>
        </Center>
      </Box>

      <Center my={6}>
        <Text as="h2" fontSize={["xl", "3xl"]} fontWeight="bold">
          Próximamente...





          
        </Text>
      </Center>
    </Box>
  );
}

export default Nexcognita;