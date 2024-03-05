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
  Spinner,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import Sidebar from '../../components/Layout/Sidebar';
import axios from 'axios';
import { addDoctorApi } from '../../https';
import { toast } from 'react-toastify';

const AddDoctors = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [about, setAbout] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [experience, setExperience] = useState('');
  const [experienceUnit, setExperienceUnit] = useState('');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [processing, setProcessing] = useState(false);

  const addHandler = async () => {
    setProcessing(true);
    if (
      !firstName ||
      !lastName ||
      !about ||
      !specialty ||
      !experience ||
      !experienceUnit ||
      !to ||
      !from ||
      !toUnit ||
      !fromUnit
    ) {
      setProcessing(false);
      return toast.warn('All fields are mandatory');
    }
    try {
      const processedData = {
        name: firstName + ' ' + lastName,
        specialty,
        yearsOfExperience: experience + ' ' + experienceUnit,
        startTime: from + ' ' + fromUnit,
        endTime: to + ' ' + toUnit,
        about,
      };
      const { data } = await addDoctorApi(processedData);
      if (!data) {
        return toast.error('Server Error');
      }
      setProcessing(false);
      toast.success(data);
      setFirstName('');
      setLastName('');
      setAbout('');
      setSpecialty('');
      setExperience('');
      setExperienceUnit('');
      setTo('');
      setFrom('');
      setToUnit('');
      setFromUnit('');
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '1fr 5fr']}>
      <Sidebar />
      <VStack
        h={'full'}
        paddingX={['10', '200px']}
        justifyContent="center"
        spacing={'16'}
      >
        <Heading children={'Add Doctor'} />
        <form
          method="POST"
          style={{
            width: '80%',
          }}
        >
          <Box marginY={'2'}>
            <FormLabel htmlFor="name" children="Name" />
            <HStack>
              <Input
                required
                id="fname"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="first name"
                focusBorderColor="yellow.500"
                type={'text-area'}
              />
              <Input
                required
                id="fname"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="last name"
                focusBorderColor="yellow.500"
                type={'text-area'}
              />
            </HStack>
          </Box>
          <Box marginY={'4'}>
            <FormLabel htmlFor="description" children="About Doctor" />
            <Textarea
              required
              id="about doctor"
              value={about}
              onChange={e => setAbout(e.target.value)}
              placeholder="Description"
              focusBorderColor="yellow.500"
              type={'text-area'}
            />
          </Box>
          <Box marginY={'4'}>
            <HStack justifyContent={'space-between'}>
              <Box>
                <FormLabel htmlFor="name" children="Doctor Availability" />
                <HStack>
                  <Box>
                    <HStack>
                      <Input
                        required
                        id="experience"
                        value={from}
                        onChange={e => setFrom(e.target.value)}
                        placeholder="From"
                        focusBorderColor="yellow.500"
                        type={'text'}
                      />
                      <Select
                        placeholder="am/pm"
                        onChange={e => setFromUnit(e.target.value)}
                      >
                        <option value="am">am</option>
                        <option value="pm">pm</option>
                      </Select>
                    </HStack>
                  </Box>
                  <Box>
                    <HStack>
                      <Input
                        required
                        id="experience"
                        value={to}
                        onChange={e => setTo(e.target.value)}
                        placeholder="To"
                        focusBorderColor="yellow.500"
                        type={'text'}
                      />
                      <Select
                        placeholder="am/pm"
                        onChange={e => setToUnit(e.target.value)}
                      >
                        <option value="am">am</option>
                        <option value="pm">pm</option>
                      </Select>
                    </HStack>
                  </Box>
                </HStack>
              </Box>
            </HStack>
          </Box>
          <Box marginY={'4'}>
            <HStack>
              <Box>
                <FormLabel htmlFor="name" children="Experience" />
                <HStack>
                  <Input
                    required
                    id="experience"
                    value={experience}
                    onChange={e => setExperience(e.target.value)}
                    placeholder="experience"
                    focusBorderColor="yellow.500"
                    type={'number'}
                  />
                  <Select
                    placeholder="-- yr/Mn --"
                    onChange={e => setExperienceUnit(e.target.value)}
                  >
                    <option value="Years">Years</option>
                    <option value="Month">Month</option>
                  </Select>
                </HStack>
              </Box>
              <Box>
                <FormLabel htmlFor="description" children="Specialty" />
                <Input
                  required
                  id="experience"
                  value={specialty}
                  onChange={e => setSpecialty(e.target.value)}
                  placeholder="Specialty"
                  focusBorderColor="yellow.500"
                  type={'text'}
                />
              </Box>
            </HStack>
          </Box>

          {processing ? (
            <Button my="4" colorScheme={'yellow'}>
              <Spinner
                thickness="3px"
                speed="0.65s"
                emptyColor="gray.200"
                color="red.500"
                size="lg"
              />
            </Button>
          ) : (
            <Button my="4" colorScheme={'yellow'} onClick={addHandler}>
              + Add
            </Button>
          )}
        </form>
      </VStack>
    </Grid>
  );
};

export default AddDoctors;
