import {
  Box,
  Button,
  Container,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Image,
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

const AddFacility = () => {
  const [imagePrev, setImagePrev] = useState('');  
  const [image, setImage] = useState('');
  const [title , setTitle] = useState('');
  const loginHandler = async () => {};
  const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: '#ECC94B',
    backgroundColor: 'white',
  };
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
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
        <Heading children={'Add Facility'} mt={'10'} />
        <form method="POST" style={{ width: '50%' }}>
          {/* ======== Name =========== */}
          <Box marginY={'2'}>
            <FormLabel htmlFor="name" children="Image" />
            <VStack>
              {imagePrev && (
                <Image src={imagePrev} boxSize="64" objectFit={'contain'} />
              )}
              <Input
                accept="image/*"
                required
                type={'file'}
                focusBorderColor="purple.300"
                css={{
                  '&::file-selector-button': {
                    ...fileUploadCss,
                    color: 'purple',
                  },
                }}
                onChange={changeImageHandler}
              />
            </VStack>
          </Box>

          {/* ========= Age , Gender and Date of birth */}
          <Box marginY={'4'}>
            <HStack justifyContent={'space-between'}>
              <Box>
                <FormLabel htmlFor="text" children="Title" />
                <Input
                  placeholder="Facility Name"
                  size="md"
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </Box>
            </HStack>
          </Box>

          <Button my="4" colorScheme={'yellow'} onClick={loginHandler}>
            + Add
          </Button>
        </form>
      </VStack>
    </Grid>
  );
};

export default AddFacility;
