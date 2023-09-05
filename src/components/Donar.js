import React from 'react';
import { Box, Text, Button, VStack, Center, Image, Stack, Heading, HStack } from '@chakra-ui/react';
import paisaje from './imagenes/paisaje.jpg';

function Donar() {
  return (
    <Box>
      {/* Sección superior con imagen de fondo */}
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
          <VStack spacing={2}>
            <Text fontSize={["2xl", "5xl"]} fontWeight="bold">
              DONAR
            </Text>
          </VStack>
        </Center>
      </Box>

      {/* Sección de texto resaltado */}
      <Box py={4} textAlign="center">
        <Text fontSize={["xl", "3xl"]} fontWeight="semibold">
          Quiero ser parte
        </Text>
      </Box>

      {/* Sección de botones */}
      <Center py={6}>
        <HStack spacing={4} wrap="wrap">
          <Button variant="solid" colorScheme="yellow" width={["100%", "250px"]} height={["50px", "60px"]} backgroundColor="#FFDE59">
            Donar una vez
          </Button>
          <Button variant="solid" colorScheme="yellow" width={["100%", "250px"]} height={["50px", "60px"]} backgroundColor="#FFDE59">
            Donar Mensualmente
          </Button>
          <Button variant="solid" colorScheme="yellow" width={["100%", "250px"]} height={["50px", "60px"]} backgroundColor="#FFDE59">
            Modificar Monto Mensual
          </Button>
        </HStack>
      </Center>

      {/* Sección de imágenes pequeñas */}
      <HStack justifyContent="center" spacing={4}>
        <Image src={paisaje} alt="Imagen pequeña" boxSize="100px" />
        <Image src={paisaje} alt="Imagen pequeña" boxSize="100px" />
        <Image src={paisaje} alt="Imagen pequeña" boxSize="100px" />
      </HStack>

      {/* Sección de beneficios de ser donante */}
      <Center py={6}>
        <Box backgroundColor="#FFDE59" width={["100%", "40%"]} py={4} px={4} rounded="md">
          <Heading as="h2" size="lg" fontWeight="bold" textAlign="center">
            Beneficios de ser donante
          </Heading>
          <Stack spacing={4} mt={6} textAlign="left">
            <Text fontSize={["md", "lg"]}>
              - Prioridad de ser seleccionado/a cuando apliques a nuestros programas.
            </Text>
            <Text fontSize={["md", "lg"]}>
              - Vía directa de comunicación con nosotros para que puedas hacernos las sugerencias y comentarios que quieras.
            </Text>
          </Stack>
        </Box>
      </Center>

      {/* Sección de imágenes pequeñas debajo */}
      <HStack justifyContent="center" spacing={4} py={4}>
        <Image src={paisaje} alt="Imagen pequeña" boxSize="100px" />
        <Image src={paisaje} alt="Imagen pequeña" boxSize="100px" />
        <Image src={paisaje} alt="Imagen pequeña" boxSize="100px" />
      </HStack>
    </Box>
  );
}

export default Donar;
