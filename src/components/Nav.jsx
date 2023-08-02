import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <Box w="80%" m="10">
      <Heading textAlign={"center"}>
        <Link to="/">Employee Management App ⚙️</Link>
      </Heading>
    </Box>
  );
}

export default Nav;
