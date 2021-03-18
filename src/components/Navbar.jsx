import { Box, Heading, Flex, Spacer, Image } from "@chakra-ui/react";
import React from "react";
import favicon from "../img/favicon.png";

function Navbar() {
  return (
    <Box bg="transparent">
      <Flex p={6} alignContent="flex-start" alignItems="center">
        <Box>
          <a href="/">
            <Heading size="md">D.</Heading>
            {/* <Image src={favicon} alt="Daniel Adonai Blog Logo" /> */}
          </a>
        </Box>
        <Spacer />
        <Box>
          <Heading size="xs">Blog</Heading>
        </Box>
        {/* <NavOptions /> */}
      </Flex>
    </Box>
  );
}

export default Navbar;
