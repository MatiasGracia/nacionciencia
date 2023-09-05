import React from 'react';
import { Box, Flex, Text, Button, VStack, Center, Image, Stack, Heading } from '@chakra-ui/react';
import paisaje from './imagenes/paisaje.jpg';

function CardComponent({ title, description, buttons, alignment, ...props }) {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      ml={alignment === 'left' ? { sm: '0', md: '50%' } : 0}
      mr={alignment === 'right' ? { sm: '0', md: '0' } : 0}
      {...props}
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '250px' }} 
        src={paisaje}
        alt={title}
      />
      <Stack spacing={4}>
        <Box p={4}>
          <Heading size='md'>{title}</Heading>
          <Text py='2'>{description}</Text>
        </Box>
        <Box p={4}>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
            {buttons.map((btn, index) => (
              <Button key={index} variant={btn.variant} colorScheme={btn.colorScheme} backgroundColor={btn.backgroundColor}>
                {btn.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

function Inicio() {
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
              NACIÓN CIENCIA
            </Text>
            <Text fontSize={["md", "xl"]} color="#FFDE59" textAlign="center">
              Conectamos apasionados en ciencia, tecnología, ingeniería, matemática y aprendizaje.
            </Text>
          </VStack>
        </Center>
      </Box>

      {/* Sección blanca superior */}
      <Box backgroundColor="white" py={4}>
        <CardComponent 
          title="¡Postulá al Lemniscato!"
          description="Conocé más sobre nuestros campamentos y experiencias únicas."
          buttons={[
            { label: "Saber más", variant: "solid", colorScheme: "yellow", backgroundColor:"#FFDE59" },
            { label: "Postular", variant: "solid", colorScheme: "yellow", backgroundColor:"#FFDE59" }
          ]}
          alignment="right"
        />
      </Box>

      {/* Sección amarilla */}
      <Box backgroundColor="#FFDE59" py={4}>
        <CardComponent 
          title="Sumate a tu delegación más cercana"
          description="Hacemos juntadas todos los meses en distintos puntos de latinamérica."
          buttons={[
            { label: "Delegaciones", variant: "solid", backgroundColor: "white", color: "black" }
          ]}
          alignment="left"
        />
      </Box>

      {/* Sección blanca inferior */}
      <Box backgroundColor="white" py={4}>
        <CardComponent 
          title="Sé voluntario o postula tu proyecto"
          description="En proyectopia conectamos proyectos de ciencia y educación con los voluntarios que necesitan."
          buttons={[
            { label: "Ser voluntario", variant: "solid", colorScheme: "yellow", backgroundColor:"#FFDE59"},
            { label: "Postular mi proyecto", variant: "solid", colorScheme: "yellow", backgroundColor:"#FFDE59" }
          ]}
          alignment="right"
        />
      </Box>
    </Box>
  );
}

export default Inicio;
