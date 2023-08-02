import React, { useState } from "react";
import { Box, Text, Input, Button, Select, useToast } from "@chakra-ui/react";
import { addEmployee } from "../api/employee";
import { useNavigate } from "react-router-dom";

function AddEmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  const handleAddEmployee = async () => {
    if (
      !firstName ||
      !lastName ||
      !gender ||
      !department ||
      !email ||
      !contact
    ) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await addEmployee({
        firstName,
        lastName,
        gender,
        department,
        email,
        contact,
      });

      console.log(response.data);

      toast({
        title: "Success",
        description: "Employee added successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/");
    } catch (err) {
      console.log(err);

      toast({
        title: "Error",
        description: "Error creating employee",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      w="80%"
      p="4"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text
        mb="4"
        color={"blue.500"}
        fontWeight={"semibold"}
        backgroundColor={"blue.50"}
        width={"400px"}
        borderRadius={"4px"}
        px={4}
        py={2}
      >
        Fill employee details to proceed
      </Text>

      <Box w="400px">
        <Input
          placeholder={"First name"}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          mb="2"
        />
        <Input
          placeholder={"Last name"}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          mb="2"
        />

        <Select
          placeholder="Select gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          mb="2"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Select>

        <Input
          placeholder={"Department"}
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          mb="2"
        />
        <Input
          placeholder={"Email address"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mb="2"
        />
        <Input
          placeholder={"Contact number"}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          mb="2"
        />

        <Button w="100%" colorScheme="blue" onClick={handleAddEmployee}>
          Add Employee
        </Button>
      </Box>
    </Box>
  );
}

export default AddEmployeeForm;
