import React from 'react';
import { Icon } from '@chakra-ui/react'
import { FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Text, VStack, Image } from '@chakra-ui/react';
import loguito from './imagenes/loguito.png';

function Footer() {
  return (
    <Box bg="#FFDE59" p={4}>
      <Flex
        as="footer"
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Sección para el logo */}
        <Box flex="1" mb={4}>
        <RouterLink to="/">
          <Image
            src={loguito}  // Asegúrate de tener la ruta correcta a tu imagen.
            alt="Logo de Nación Ciencia"
            boxSize={["150px", "210px", "240px", "300px"]} // Ajusta los tamaños según lo que necesites. Estos valores son solo un ejemplo.
          />
        </RouterLink>
        </Box>

        {/* Sección para las redes sociales */}
        <Box flex="1" textAlign={{ base: "center", md: "left" }} mb={4}>
    <Text fontWeight="bold">Nuestras redes</Text>
    <Text mb={4}>Subimos contenido muy interesante que te va a encantar.</Text>
    <Flex justifyContent={{ base: "center", md: "flex-start" }}>
        <a href="https://www.youtube.com/channel/UCf0Zkf2rOOdTPd-7fygk1Dw" target="_blank" rel="noopener noreferrer">
            <Icon as={FaYoutube} mr={3} cursor="pointer" />
        </a>
        <a href="https://www.instagram.com/nacionciencia" target="_blank" rel="noopener noreferrer">
            <Icon as={FaInstagram} mr={3} cursor="pointer" />
        </a>
        <a href="https://www.tiktok.com/@nacionciencia?lang=es" target="_blank" rel="noopener noreferrer">
            <Icon as={FaTiktok} cursor="pointer" />
        </a>
    </Flex>
</Box>

        {/* Sección para las páginas */}
        <Box flex="1" textAlign={{ base: "center", md: "right" }}>
          <VStack align="start" spacing={2}>
            <Text fontWeight="bold">Páginas</Text>
            <RouterLink to="/"><Text cursor="pointer">Inicio</Text></RouterLink>
            <RouterLink to="/quienessomos"><Text cursor="pointer">Quiénes somos</Text></RouterLink>
            <RouterLink to="/campamentos"><Text cursor="pointer">Campamentos</Text></RouterLink>
            <RouterLink to="/contacto"><Text cursor="pointer">Contacto</Text></RouterLink>
            <RouterLink to="/donar"><Text cursor="pointer">Donaciones</Text></RouterLink>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
