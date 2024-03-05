
import {
  Box,
  Grid,
  Heading,
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
  Button,
  HStack,
  useDisclosure,
  Input,
  VStack,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../../components/Layout/Sidebar';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import facility1 from '../../Assets/Facilities/download.jpeg';
import facility2 from '../../Assets/Facilities/download (1).jpeg';

const Facilities = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [students, setStudents] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchRegNo, setSearchRegNo] = useState('');

  const handleNameSearch = async () => {};
  const handleRegSearch = async () => {};

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '1fr 5fr']}>
      <Sidebar />
      <Box p={['0', '16']} overflowX="auto">
        <HStack justifyContent={'space-between'}>
          <Heading
            children={'Facilities'}
            ml={['0', '16']}
            mb="16"
            textAlign={['center', 'left']}
          />
          <HStack justifyContent={'space-around'}>
            <HStack>
              <Input
                placeholder="Search by name"
                size="md"
                value={searchName}
                onChange={e => setSearchName(e.target.value)}
              />
              <Button
                colorScheme="teal"
                variant="solid"
                onClick={handleNameSearch}
              >
                Search
              </Button>
            </HStack>
          </HStack>
        </HStack>
        <TableContainer maxH="70vh" overflowY="auto">
          <Table variant="simple">
            <TableCaption>Treatments</TableCaption>
            <Thead>
              <Tr>
                <Th>Facility Name</Th>
                <Th>Facility Image</Th>
                <Th> </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>XYZ facility</Td>
                <Td>
                  <Image src={facility1} boxSize="64" objectFit={'contain'} />
                </Td>

                <Td>
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    // onClick={onOpen}
                    onClick={() => {}}
                  >
                    Rename
                  </Button>
                </Td>
                <Td>
                  <Button colorScheme="teal" variant="solid" onClick={() => {}}>
                    Update Image
                  </Button>
                </Td>
                <Td>
                  <Button variant="solid" colorScheme="red" onClick={() => {}}>
                    Remove
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>new XYZ facility</Td>
                <Td>
                  <Image src={facility2} boxSize="64" objectFit={'contain'} />
                </Td>

                <Td>
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    // onClick={onOpen}
                    onClick={() => {}}
                  >
                    Rename
                  </Button>
                </Td>
                <Td>
                  <Button colorScheme="teal" variant="solid" onClick={() => {}}>
                    Update Image
                  </Button>
                </Td>
                <Td>
                  <Button variant="solid" colorScheme="red" onClick={() => {}}>
                    Remove
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Grid>
  );
};

export default Facilities;
