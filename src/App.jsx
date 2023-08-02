import React from "react";
import { Button, Heading, Box } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Nav from "./components/Nav";
import Employees from "./components/Employees";
import AddEmployeeForm from "./components/AddEmployeeForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box
          w="100%"
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Nav />

          <Routes>
            <Route path="/" Component={Employees} />
            <Route path="/add" Component={AddEmployeeForm} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
