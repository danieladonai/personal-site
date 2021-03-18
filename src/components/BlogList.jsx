import React from "react";
import { Box, Container, ListItem, UnorderedList } from "@chakra-ui/layout";

function BlogList() {
  return (
    <Container>
      <UnorderedList spacing={3} align="left" color="red.900">
        <ListItem>
          How I Sold My Business On Flippa For 10x Profit (Dec 17th, 2017)
        </ListItem>
        <ListItem>Part 2: Closing the deal</ListItem>
        <ListItem>Inte</ListItem>
      </UnorderedList>
    </Container>
  );
}

export default BlogList;
