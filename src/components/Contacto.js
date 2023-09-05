import React from 'react';
import { Box, Flex, Text, Button, VStack, Center, Input, Textarea, FormLabel, FormControl } from '@chakra-ui/react';
import paisaje from './imagenes/paisaje.jpg';

function Contacto() {
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
              CONTACTO
            </Text>
          </VStack>
        </Center>
      </Box>

      {/* Sección de texto llamativo */}
      <Box backgroundColor="white" py={4} textAlign="center">
        <Text fontSize={["xl", "3xl"]} mb={6} textAlign="center"> 
          ¿Tenés una propuesta, sugerencia o agradecimiento? ¡Contactanos!
        </Text>
        
        {/* Formulario */}
        <Flex direction="column" maxW="600px" mx="auto" spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input placeholder="Tu nombre" />
          </FormControl>
          
          <FormControl id="subject" isRequired>
            <FormLabel>Asunto</FormLabel>
            <Input placeholder="Asunto de tu mensaje" />
          </FormControl>
          
          <FormControl id="email" isRequired>
            <FormLabel>Correo</FormLabel>
            <Input placeholder="Tu correo electrónico" type="email" />
          </FormControl>
          
          <FormControl id="message" isRequired>
            <FormLabel>Mensaje</FormLabel>
            <Textarea placeholder="Tu mensaje" rows={5} />
          </FormControl>
          
          <Button variant="solid" colorScheme="yellow" alignSelf="center" mt={4} backgroundColor="#FFDE59">
            Enviar
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default Contacto;

