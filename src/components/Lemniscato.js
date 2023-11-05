import { Box, Circle, Flex, Heading, Text, VStack, HStack, Image, AspectRatio, Grid } from "@chakra-ui/react";

import paisaje from './imagenes/uno.jpg';


function Lemniscato() {
  return (

    <VStack spacing="0%" p="0%" align="center" w="100%">

      {/* Foto como fondo, título y subtítulo en el centro */}
      <Box position="relative" w="100%" h="50vh">
        <Image src={paisaje} alt="Lemniscato" w="100%" h="100%" objectFit="cover" />
        <Flex position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" direction="column" textAlign="center">
          <Heading size="2xl" color="white">Lemniscato</Heading>
          <Text color="#FFDE59" fontSize="2xl">¡Una aventura para conocer personas tan apasionadas como vos!</Text>
        </Flex>
      </Box>

      {/* ¿Por qué? con círculo amarillo */}
      <Flex direction="column" align="center" justify="center" minHeight="110vh">
  <Heading size="lg" mb={210} textAlign="center">¿Qué es el Lemniscato?</Heading>

  <Box position="relative" w="90vw" h="90vw" maxW="700px" maxH="700px" mb={6}>
    <Circle size="100%" maxW="700px" maxH="700px" bg="#FFDE59" position="absolute" top="0" left="0" />

    <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)"
      width="80%" height="80%" display="flex" alignItems="center" justifyContent="center"
      textAlign="center" style={{
        shapeOutside: 'circle()',
        float: 'left',
        shapeMargin: '1rem'
      }}
    >
            Imaginate hospedándote en un hotel completamente virtual lleno de personas tan apasionadas como vos. Visualizate entrando a un parque digital para participar de la sesión de la mañana, un encuentro en donde tendrás que poner todas tus ganas de aprender para enfrentar desafíos en donde desarrollarás la escucha activa para una comunicación realmente efectiva, en donde pondrás a prueba tu pensamiento crítico y tu capacidad de trabajar en equipo, en donde desarrollarás herramientas de comunicación tan valiosas como el storytelling y la oratoria, en donde llevarás tu productividad al siguiente nivel y en donde tendrás conversaciones reales, conversaciones genuinas, conversaciones que te harán sentir como nunca antes te has sentido, conversaciones en las que conectarás realmente.
Y que luego, cuando todo haya terminado, abrirás los ojos y te darás cuenta que ya sos parte de una comunidad de más de 100 jóvenes de toda América Latina tan increíbles como vos. Todo eso, todo ese conjunto de emociones, de alegrías y llantos, de aprendizajes y conexiones, todo eso, es el Lemniscato. ¿Te sumás?
          </Text>
        </Box>
      </Flex>

      {/* Otro "¿Por qué?" con 3 items */}
      <Box w="100%" mt="5%">
        <Heading size="lg" mb="2%" textAlign="center">¿Por qué participar en el Lemniscato?</Heading>
        <VStack spacing="2%" p="5%" align="center" w="100%">
          <Box bg="#FFDE59" p="2%" borderRadius="md" width="100%">
            <Text><strong>Aprenderás:</strong> Desarrollarás habilidades en áreas clave para tu crecimiento como persona y tu futuro como profesional.</Text>
          </Box>
          <Box bg="white" p="2%" borderRadius="md" width="100%">
            <Text><strong>Conocerás personas:</strong> Generarás conexiones y amistades de gran valor.</Text>
          </Box>
          <Box bg="#FFDE59" p="2%" borderRadius="md" width="100%">
            <Text><strong>Comunidad:</strong> Luego de la experiencia tendrás el contacto de jóvenes apasionados y profesionales de áreas STEM, además de acceso total a una comunidad de más de 100 lemniscaters.</Text>
          </Box>
          <Box bg="white" p="2%" borderRadius="md" width="100%">
            <Text><strong>Mucha emoción:</strong> Diseñamos tantas actividades que algunas se realizan hasta afuera de las sesiones, esto junto a toda una economía ficticia que hemos creado, mantiene la diversión de la aventura al máximo, por otro lado, quienes pasan por este programa desarrollan un sentido de pertenencia con el grupo con el que participan.</Text>
          </Box>
        </VStack>
      </Box>
    



      {/* Espacio para 3 videos */ }
      <Box w="full" py={10} bg="gray.50">
      <Heading size="lg" mb={6} textAlign="center">
        Nuestros Videos
      </Heading>

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6} px={{ base: 4, lg: 20 }}>
        {/* Videos Locales */}
        {["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4"].map((videoSrc, index) => (
          <AspectRatio key={index} ratio={16 / 9} maxW="600px" mx="auto">
            <video controls>
              <source src={`/path_to_your_videos/${videoSrc}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AspectRatio>
        ))}

        {/* Video de YouTube */}
        <AspectRatio ratio={16 / 9} maxW="600px" mx="auto">
          <iframe
            src="https://www.youtube.com/embed/IUn5WFo-cpY"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Grid>
    </Box>

    </VStack >
  );
}

export default Lemniscato;
