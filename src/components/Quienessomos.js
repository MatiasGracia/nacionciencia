
import React, { useState, useEffect } from 'react';
import { Box, Center, Image, Heading, Grid, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Icon, Text } from '@chakra-ui/react';
import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import paisaje from './imagenes/paisaje.jpg';
import ana from './imagenes/ana.jpg';
import chiara from './imagenes/chiara.jpg';
import edu from './imagenes/edu.png';
import nico from './imagenes/nico.png';
import zur from './imagenes/zur.jpg';
import bruno from './imagenes/bruno.jpeg';
import ari from './imagenes/ari.jpeg';
import enzo from './imagenes/enzo.jpg';

function Miembro({ imagen, nombre, descripcion, onOpen }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} maxWidth="300px" cursor="pointer" onClick={onOpen}>
      <Image src={imagen} alt={nombre} height="300px" width="300px" objectFit="cover" />
      <Box p="6">
        <Heading fontSize="xl">{nombre}</Heading>
        <Box mt={4}>{descripcion}</Box>
      </Box>
    </Box>
  );
}

function Quienessomos() {
  const [miembros, setMiembros] = useState([
    { imagen: nico, nombre: 'Nico Dahlquist', descripcion: 'Estudio Lic. en Ciencias de la Computación. Organicé un campamento de ciencia presencial y uno virtual. Participé de olimpiadas y campamentos científicos, incluso tuve la oportunidad de ser becado por el Balseiro. Dirigí un emprendimiento para facilitar el aprendizaje de ingresantes de mi facultad tras el inicio de la pandemia. Me apasiona ver al aprendizaje como una aventura, y en Nación Ciencia quiero que encuentres la tuya.', socialLinks: [{ icon: FaInstagram, link: 'https://instagram.com/usuario1' }, { icon: FaYoutube, link: 'https://youtube.com/usuario1' }] },
    { imagen: ana, nombre: 'Ana Stumpf', descripcion: 'Estoy estudiando Lic. y Profesorado en Matemática. Me encanta sorprenderme cuando aprendo algo nuevo y disfruto transmitir esos conocimientos. Formo parte de la Asociación Guías Argentinas y la Red Kimlu. Estoy muy comprometida con el ambiente y me gusta generar hábitos sustentables y promoverlos. Me gusta mucho comer, probar y experimentar sabores nuevos.', socialLinks: [{ icon: FaInstagram, link: 'https://instagram.com/usuario1' }, { icon: FaYoutube, link: 'https://youtube.com/usuario1' }] },
    { imagen: edu, nombre: 'Eduardo Pavéz', descripcion: 'Pronto a recibirme de Ing. Mecatrónico, carrera que empecé para crear el traje de Ironman. No va a ser posible, pero si pongo ganas capaz armo a WALL-E. Soy súper nerd y conectar con otros nerds me cambió la vida. Por eso creo que las personas que conozcas por Nación Ciencia van a cambiar la tuya.', socialLinks: [{ icon: FaInstagram, link: 'https://instagram.com/usuario1' }, { icon: FaYoutube, link: 'https://youtube.com/usuario1' }] },
    { imagen: bruno, nombre: 'Bruno Giordano', descripcion: 'A pesar de no tener la tonada característica, soy cordobés, me gusta el vino y la matemática. Estudio en el universo paralelo en el que habita la Facultad de Matemática Astronomía y Física de la Universidad Nacional de Córdoba. Soy internacionalmente reconocido como “el chico del mate” por mi desbordada adicción a la infusión nacional más poderosa de todos los tiempos. Me apasiona profundamente conocer y hacer que se conozcan personas. Creo que las conexiones humanas son nuestra mejor herramienta para llevar una vida feliz como también para realizar cambios en el mundo.', socialLinks: [{ icon: FaInstagram, link: 'https://instagram.com/usuario1' }, { icon: FaYoutube, link: 'https://youtube.com/usuario1' }] },
    { imagen: enzo, nombre: 'Enzo Ferraris', descripcion: 'Neuquino. 90% Ing. Químico. Nací con la curiosidad de explorar los secretos del universo y la ciencia me llevó a lugares que jamás imaginé: desde la selva valdiviana chilena para estudiar los líquenes como a presentar los resultados de mi tesis en las costas de Trinidad y Tobago. Descubrí que mi vocación es difundir el mensaje de que la ciencia hace que la utopía de un mundo mejor sea cada vez más cercana a la realidad, y en Nación Ciencia podés descubrir la tuya.    ', socialLinks: [{ icon: FaInstagram, link: 'https://instagram.com/usuario1' }, { icon: FaYoutube, link: 'https://youtube.com/usuario1' }] },
    { imagen: ari, nombre: 'Ariana Zacarías', descripcion: 'Estudio Ing. Industrial y, como buena estudiante de mi carrera, me apasionan mil cosas: desde las STEM hasta las humanidades, amo comunicar y diseñar. Participé en olimpíadas, competencias y campamentos de ciencias que me cambiaron la vida. Hoy, trabajo día a día por hacer del mundo un lugar un poco más amigable e inclusivo, por eso soy voluntaria en diferentes fundaciones y proyectos que surgen.', socialLinks: [{ icon: FaInstagram, link: 'https://instagram.com/usuario1' }, { icon: FaYoutube, link: 'https://youtube.com/usuario1' }] },
    { imagen: zur, nombre: 'Joaco Zur', descripcion: 'Diferentes experiencias en mi vida me han revelado el extraordinario poder de pertenecer a una comunidad, de conectar con personas y de nutrir relaciones valiosas. Esto me impulsó a co-fundar Nación Ciencia junto a un inspirador grupo de personas, con el objetivo de maximizar el potencial de esta comunidad de jóvenes curiosos y compartirla con un público más amplio. Estudio Física en el Instituto Balseiro. Me apasionan las conversaciones y la conciencia. Amo el mate, la chocotorta, la música, las burbujas y amar.', socialLinks: [{ icon: FaInstagram, link: 'https://instagram.com/usuario1' }, { icon: FaYoutube, link: 'https://youtube.com/usuario1' }] },
    { imagen: chiara, nombre: 'Chiara Lombardo', descripcion: 'Nací en las tierras donde se dice "ia ta listo el poio?" Aunque soy experta en los guiones de Shrek, solo se iniciar sesión apretando el botón de olvidé contraseña. Me encantan los juegos de palabras y de mesa, me gusta jugar al Geogebra y nadar porque solo se que no se nada. Estudio la licenciatura en física y participar de olimpiadas de ciencias y campamentos científicos me tatuaron la visión de Nación Ciencia en mis principios.', socialLinks: [{ icon: FaInstagram, link: 'https://instagram.com/usuario1' }, { icon: FaYoutube, link: 'https://youtube.com/usuario1' }] },
    // ... Agrega aquí el resto de los miembros
  ]);

  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const miembrosShuffle = [...miembros];
    for (let i = miembrosShuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [miembrosShuffle[i], miembrosShuffle[j]] = [miembrosShuffle[j], miembrosShuffle[i]];
    }
    setMiembros(miembrosShuffle);
  }, []);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

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
            ¿QUIÉNES SOMOS?
          </Text>
        </Center>
      </Box>
      <Center>
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }} gap={6}>
          {miembros.map((miembro, index) => (
            <Miembro key={index} {...miembro} onOpen={() => handleMemberClick(miembro)} />
          ))}
        </Grid>
      </Center>

      {selectedMember && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedMember.nombre}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={selectedMember.imagen} alt={selectedMember.nombre} mb={4} />
              {selectedMember.descripcion}
              <Box mt={4}>
                {selectedMember.socialLinks.map((link, idx) => (
                  <Icon as={link.icon} mr={3} cursor="pointer" onClick={() => window.open(link.link, '_blank')} key={idx} />
                ))}
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}

export default Quienessomos;