import {
    Box,
    Button,
    Container,
    FormLabel,
    Grid,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Select,
    Textarea,
    useToast,
    VStack,
  } from '@chakra-ui/react';
  import React, { useEffect, useState } from 'react';
  import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
  import Sidebar from '../../components/Layout/Sidebar';
  import axios from 'axios';
  
  const EditTreatment = () => {
    const [createdCls, setCreatedCls] = useState([]);
    const [treatmentName, setTreatmentName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [selectedClass, setselectedClass] = useState('');
    const [phone, setPhone] = useState('');
    const [whatsApp, setWhatsApp] = useState('');
    const [address, setAddress] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [dateOfAdmission, setDateOfAdmission] = useState('');
    const toast = useToast();
  
    const loginHandler = async () => {};
  
    return (
      <Grid minH={'100vh'} templateColumns={['1fr', '1fr 5fr']}>
        <Sidebar />
        <VStack
          h={'full'}
          paddingX={['10', '200px']}
          justifyContent="center"
          spacing={'16'}
        >
          <Heading children={'Edit Treatment'} mt={'10'} />
          <form method="POST" style={{ width: '100%' }}>
            {/* ======== Name =========== */}
            <Box marginY={'2'}>
              <FormLabel htmlFor="name" children="Treatment Name" />
              <HStack>
                <Input
                  required
                  id="fname"
                  value={treatmentName}
                  onChange={e => setTreatmentName(e.target.value)}
                  placeholder="Name"
                  focusBorderColor="yellow.500"
                  type={'text-area'}
                />
              </HStack>
            </Box>
  
            {/* ========= Age , Gender and Date of birth */}
            <Box marginY={'4'}>
              <HStack justifyContent={'space-between'}>
                <Box>
                  <FormLabel htmlFor="text" children="Treatment Id" />
                  <Input
                    placeholder="Unique number"
                    size="md"
                    type="number"
                    value={dateOfBirth}
                    onChange={e => setDateOfBirth(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="text" children="Treatment Cost (₹)" />
                  <Input
                    placeholder="Cost in ₹"
                    size="md"
                    type="number"
                    value={dateOfBirth}
                    onChange={e => setDateOfBirth(e.target.value)}
                  />
                </Box>
                <Box marginY={'2'}>
                  <FormLabel htmlFor="name" children="Treatment Duration" />
                  <HStack>
                    <Input
                      required
                      id="fname"
                      value={treatmentName}
                      onChange={e => setTreatmentName(e.target.value)}
                      placeholder="Duration"
                      focusBorderColor="yellow.500"
                      type={'number'}
                    />
                    <Select
                      placeholder="-- Hr/Min --"
                      onChange={e => setGender(e.target.value)}
                    >
                      <option value="Male">Minute</option>
                      <option value="Female">Hour</option>
                      <option value="Female">Day</option>
                      <option value="Female">Month</option>
                      <option value="Female">Year</option>
                    </Select>
                  </HStack>
                </Box>
              </HStack>
            </Box>
  
            {/* ========= Email ============= */}
            <Box marginY={'4'}>
              <FormLabel htmlFor="description" children="Treatment Description" />
              <Textarea
                required
                id="fname"
                value={treatmentName}
                onChange={e => setTreatmentName(e.target.value)}
                placeholder="Description"
                focusBorderColor="yellow.500"
                type={'text-area'}
              />
            </Box>
  
            <Button my="4" colorScheme={'yellow'} onClick={loginHandler}>
              + Add
            </Button>
          </form>
        </VStack>
      </Grid>
    );
  };
  
  export default EditTreatment;
  