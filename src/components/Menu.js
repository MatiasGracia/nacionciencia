import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Text, IconButton, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function Menu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <Box bg="#FFDE59" p={4}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        fontFamily="Josefin Sans, sans-serif"
      >
        <RouterLink to="/">
          <Text fontSize="xl" fontWeight="bold" ml={2} cursor="pointer" onClick={closeMenu}>
            Nación Ciencia
          </Text>
        </RouterLink>

        <IconButton
          display={{ base: "block", md: "none" }}
          aria-label="Open Menu"
          fontSize="20px"
          variant="unstyled"
          onClick={toggleMenu}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        />

        <Box
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          alignItems="center"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 4, md: 8 }}
            alignItems="center"
            mt={{ base: 4, md: 0 }}
          >
            <RouterLink to="/" onClick={closeMenu}>
              <Text mr={4} cursor="pointer">Inicio</Text>
            </RouterLink>
            <RouterLink to="/quienessomos" onClick={closeMenu}>
              <Text mr={4} cursor="pointer">Quienes Somos</Text>
            </RouterLink>
            <RouterLink to="/campamentos" onClick={closeMenu}>
              <Text mr={4} cursor="pointer">Campamentos</Text>
            </RouterLink>
            <RouterLink to="/contacto" onClick={closeMenu}>
              <Text mr={4} cursor="pointer">Contacto</Text>
            </RouterLink>
            <RouterLink to="/donar" onClick={closeMenu}>
              <Button backgroundColor="white" color="black" fontWeight="bold">
                Donar
              </Button>
            </RouterLink>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Menu;
