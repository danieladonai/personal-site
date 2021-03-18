import { Container, Flex, Heading, Link, Stack, Text } from "@chakra-ui/layout";
import React from "react";

function Header() {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center" px={4}>
      <Container>
        <Stack
          textAlign={"justify"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: "5xl", sm: "5xl", md: "5xl" }}
            lineHeight={"110%"}
            align="left"
          >
            Hi, I'm Daniel.
          </Heading>
          {/* <Text
            fontSize={{ base: "18px", sm: "16px", md: "18px" }}
            color={"gray.300"}
          >
            A scrappy engineer turned entrpeneur
          </Text> */}
          <Text>
            I've gone from being a visual artist to an engineer to an entrpeneur
            and now to a digital nomad (and with many pit stops in between).
          </Text>
          <Text>This is a place where I share learnings, guides & ideas.</Text>

          <Text align="left">
            I'm at{" "}
            <Link href="https://twitter.com/danielasmarino" isExternal>
              twitter
            </Link>
            ,{" "}
            <Link href="https://www.instagram.com/danieladonai/" isExternal>
              instagram
            </Link>{" "}
            or just say{" "}
            <Link href={"mailto:hi@danieladonai.com"}>
              {" "}
              hi@danieladonai.com
            </Link>
          </Text>
        </Stack>
      </Container>
    </Flex>
  );
}

export default Header;
