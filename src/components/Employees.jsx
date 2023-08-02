import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { getAllEmployees } from "../api/employee";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await getAllEmployees();
      setEmployees(response.data);
    } catch (err) {
      console.log(err);
      toast({
        title: "Error",
        description: "Error fetching employees",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <Box w="80%" p="4">
      <Link to="/add">
        <Button colorScheme="blue" mb="4">
          Add Employee
        </Button>
      </Link>

      {employees.length > 0 ? (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Gender</Th>
                <Th>Department</Th>
                <Th>Email address</Th>
                <Th>Contact number</Th>
              </Tr>
            </Thead>
            <Tbody>
              {employees.map((employee) => (
                <Tr key={employee.id}>
                  <Td>{employee.id}</Td>
                  <Td>{employee.firstName}</Td>
                  <Td>{employee.lastName}</Td>
                  <Td>{employee.gender}</Td>
                  <Td>{employee.department}</Td>
                  <Td>{employee.email}</Td>
                  <Td>{employee.contact}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Text>No employees exist in the database.</Text>
      )}
    </Box>
  );
}

export default Employees;

// employees.map((employee) => <Text>{employee.firstName}</Text>)
