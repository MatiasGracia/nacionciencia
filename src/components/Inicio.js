import React from 'react';
import { Box, Flex, Text, Button, VStack, Center, Image, Stack, Heading } from '@chakra-ui/react';
import paisaje from './imagenes/uno.jpg';



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
  ml={4}  // Esto añade un margen izquierdo. Puedes ajustar el valor según lo que necesites.
  style={{
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Añade una sombra suave a la imagen
    borderRadius: '4px'  // Opcional: añade bordes redondeados para darle un toque más estilizado
  }}
/>

      <Stack spacing={4}>
        <Box p={4}>
          <Heading size='md'>{title}</Heading>
          <Text py='2'>{description}</Text>
        </Box>
        <Box p={4}>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
            {buttons.map((btn, index) => (
              <Button
                key={index}
                variant={btn.variant}
                backgroundColor={btn.backgroundColor}
                color={btn.color}
                onClick={() => window.open(btn.link, "_self")}
              >
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
        position="relative"  // Necesario para posicionar el pseudo-elemento
        height={["300px", "450px"]}
        color="white"
        py={4}
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${paisaje})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: 'brightness(50%)',  // Oscurece la imagen de fondo
          zIndex: -1  // Asegura que el contenido esté encima del fondo
        }}
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
            { label: "Saber más", variant: "solid", colorScheme: "yellow", backgroundColor: "#FFDE59", link: "/Lemniscato" },
            { label: "Postular", variant: "solid", colorScheme: "yellow", backgroundColor: "#FFDE59", link: "https://docs.google.com/forms/d/e/1FAIpQLSfb1Qngd_Sg3NzfUGhnWGF9gLJTmz_3_1tglAdjEZG_si4tRQ/viewform" }
          ]}
          alignment="right"
        />
      </Box>

      {/* Sección amarilla */}
      <Box backgroundColor="#FFDE59" py={4}>
        <CardComponent
          title="NexCognita"
          description="Próximamente..."
          buttons={[
            { label: "Saber más", variant: "solid", colorScheme: "yellow", backgroundColor: "#white", link: "/Nexcognita" },
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
            { label: "Ser voluntario", variant: "solid", colorScheme: "yellow", backgroundColor: "#FFDE59", link: "https://docs.google.com/document/d/160fMejJRK_5kFtMchH02InRKc1R0b6DS6oAAxDKIXII/edit" },
            { label: "Postular mi proyecto", variant: "solid", colorScheme: "yellow", backgroundColor: "#FFDE59", link: "https://docs.google.com/forms/d/e/1FAIpQLSe_F6ZYhZQAFGKK2-iNq1YOCmFnDkayIOw3_aJQqa9l891G_w/viewform" }
          ]}
          alignment="right"
        />
      </Box>
    </Box>
  );
}

export default Inicio;
